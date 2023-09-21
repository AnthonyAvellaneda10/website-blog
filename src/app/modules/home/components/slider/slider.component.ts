import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  private heroSlider: HTMLElement | null = null;
  private heroSliderItems: NodeListOf<HTMLElement> | null = null;
  private heroSliderPrevBtn: HTMLElement | null = null;
  private heroSliderNextBtn: HTMLElement | null = null;
  private currentSlidePos: number = 0;
  private lastActiveSliderItem: HTMLElement | null = null;

  constructor() { }

  ngOnInit(): void {
    this.heroSlider = document.querySelector("[data-hero-slider]");
    this.heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
    this.heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    this.heroSliderNextBtn = document.querySelector("[data-next-btn]");
    this.lastActiveSliderItem = this.heroSliderItems[0];

    if (this.heroSliderItems && this.heroSliderItems.length > 0) {
      this.autoSlide();

      if (this.heroSliderNextBtn) {
        this.heroSliderNextBtn.addEventListener("click", this.slideNext.bind(this));
      }

      if (this.heroSliderPrevBtn) {
        this.heroSliderPrevBtn.addEventListener("click", this.slidePrev.bind(this));
      }
    }
  }

  private updateSliderPos(): void {
    if (this.heroSliderItems && this.lastActiveSliderItem) {
      this.lastActiveSliderItem.classList.remove("active");
      this.heroSliderItems[this.currentSlidePos].classList.add("active");
      this.lastActiveSliderItem = this.heroSliderItems[this.currentSlidePos];
    }
  }

  private slideNext(): void {
    if (this.heroSliderItems) {
      if (this.currentSlidePos >= this.heroSliderItems.length - 1) {
        this.currentSlidePos = 0;
      } else {
        this.currentSlidePos++;
      }

      this.updateSliderPos();
    }
  }

  private slidePrev(): void {
    if (this.heroSliderItems) {
      if (this.currentSlidePos <= 0) {
        this.currentSlidePos = this.heroSliderItems.length - 1;
      } else {
        this.currentSlidePos--;
      }

      this.updateSliderPos();
    }
  }

  private autoSlide(): void {
    setInterval(() => {
      this.slideNext();
    }, 7000);
  }
}
