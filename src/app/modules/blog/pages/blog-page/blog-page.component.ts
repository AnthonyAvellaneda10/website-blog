import { Component } from '@angular/core';
import { ApiService } from 'src/app/modules/home/services/api.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  blogData: any; // Define la variable para almacenar los datos del blog

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getBlogData();
  }

  getBlogData(): void {
    this.apiService.getBlogData().subscribe((blog) => {
      this.blogData = blog.data.results;
    });
  }
}
