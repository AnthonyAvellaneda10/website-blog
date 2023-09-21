import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  blogData: any; // Define la variable para almacenar los datos del blog

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getBlogData();
  }

  getBlogData(): void {
    this.apiService.getBlogData().subscribe((blog) => {
      this.blogData = blog.data.results.slice(0, 4);
    });
  }
}
