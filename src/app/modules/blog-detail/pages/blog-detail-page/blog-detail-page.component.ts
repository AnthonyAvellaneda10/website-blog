import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/modules/home/services/api.service';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css']
})
export class BlogDetailPageComponent {
  id!: string;
  blogData: any;
  medialSocialShare: any;
  lenghtData!: number;
  facebookShareLink!: string;
  whatsappShareLink!: string;
  twitterShareLink!: string;
  linkedinShareLink!: string;
  existBlog: boolean = false;
  generateQR!:string;
  shareName!:string;
  backgroundImageUrl!:string;
  htmlContent!: string;
  htmlContent2!: string;

  constructor( private route: ActivatedRoute, private apiService: ApiService, private title: Title ) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.getDetailBlog();
  }


  getDetailBlog(): void {
    this.apiService.getBlogData().subscribe((blog) => {
      this.lenghtData = blog.data.results.length;
      blog.data.results.forEach((getData) => {

        if (this.lenghtData < parseInt(this.id, 10) || 0 >= parseInt(this.id, 10)) {
          this.blogNotFound();
        }
        
        else if (this.id == getData.id.toString()) {
          this.title.setTitle(getData.title);
          this.generateQR = window.location.href;
          this.shareName = getData.title;
          
          this.htmlContent = getData.subtitles.items[2].contenido;
          this.htmlContent2 = getData.subtitles.items[3].contenido;
          
          this.backgroundImageUrl = getData.backgroundImage;
          this.blogData = [getData];
          // Verificar que 'getData.hashtags' esté definido y sea un arreglo
          if (getData.hashtags && Array.isArray(getData.hashtags)) {
            this.facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(getData.message)}&hashtag=${encodeURIComponent(getData.hashtags.join(','))}`;
            this.whatsappShareLink = `https://wa.me/?text=${encodeURIComponent(`${getData.message} ${window.location.href}`)}`;
            this.twitterShareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${getData.message} ${this.getHashtags(getData.hashtags)} ${window.location.href} via @TomStark08`)}`;
            this.linkedinShareLink = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(getData.message)}&summary=${encodeURIComponent(getData.hashtags.join(','))}`;
          } else {
            // Manejar el caso en el que 'getData.hashtags' no está definido o no es un arreglo
            console.error("'getData.hashtags' no está definido o no es un arreglo");
          }
        }
      });
    });
  }
  
  getHashtags(hashtags: any) {
    return hashtags.map((tag: any) => `#${tag}`).join(' ');
  }

  blogNotFound() {
    this.backgroundImageUrl = 'https://areaf5.es/wp-content/uploads/2023/06/404.jpg';
    this.title.setTitle('Blog not found | Desarrollo Adaptativo');
    this.existBlog = true;
  }
}
