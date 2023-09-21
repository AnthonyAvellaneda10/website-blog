import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  headerVisible = true;
  backToTopVisible = false;
  lastScrollPos = 0;
  currentScrollPos = 0;
  headerElement: HTMLElement | null = null;
  backTopBtnElement: HTMLElement | null = null;
  navTogglers: NodeListOf<Element> | null = null;
  overlayElement : HTMLElement | null = null;
  navbarElement : HTMLElement | null = null;
  currentRoute!: string;
  id!: string;

  constructor( private router: Router, private route: ActivatedRoute ) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  showBlogDetail(): boolean {
    return this.currentRoute.includes('/blog-detail');
  }

  ngAfterViewInit() {
    this.headerElement = document.querySelector('[data-header]') as HTMLElement;
    this.backTopBtnElement = document.querySelector('[data-back-top-btn]') as HTMLElement;    
    // Asegúrate de que overlayElement y navbarElement no sean nulos antes de eliminar clases
    if (this.overlayElement) {
      this.overlayElement.classList.remove("active");
    }

    if (this.navbarElement) {
      this.navbarElement.classList.remove("active");
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Elimina la clase nav-active cuando cambie la ruta
        if (this.overlayElement) {
          this.overlayElement.classList.remove("active");
        }
        if (this.navbarElement) {
          this.navbarElement.classList.remove("active");
        }
        document.body.classList.remove("nav-active");
      }
    });
  }

  toggleNavbar() {
    if (!this.navTogglers) {
      this.navTogglers = document.querySelectorAll('[data-nav-toggler]');
    }
  
    if (!this.overlayElement) {
      this.overlayElement = document.querySelector('[data-overlay]') as HTMLElement;
    }
  
    if (!this.navbarElement) {
      this.navbarElement = document.querySelector('[data-navbar]') as HTMLElement;
    }
  
    this.overlayElement.classList.toggle("active");
    this.navbarElement.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  
    // Elimina el event listener antes de agregar uno nuevo
    this.navTogglers.forEach((element) => {
      element.removeEventListener("click", this.toggleNavbar);
      element.addEventListener("click", this.toggleNavbar);
    });
  }

  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.currentScrollPos = window.scrollY;

    if (this.currentScrollPos >= 50) {
      this.headerElement?.classList.add("active");
      this.backTopBtnElement?.classList.add("active");
      this.hideHeader();
    } else {
      this.headerElement?.classList.remove("active");
      this.backTopBtnElement?.classList.remove("active");
    }
  }

  private hideHeader() {
    const isScrollBottom = this.lastScrollPos < this.currentScrollPos;
    if (this.headerElement) {
      if (isScrollBottom) {
        this.headerElement.classList.add("hide");
      } else {
        this.headerElement.classList.remove("hide");
      }
    }

    this.lastScrollPos = this.currentScrollPos;
  }

  scrollUp(event: Event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace ('#')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
