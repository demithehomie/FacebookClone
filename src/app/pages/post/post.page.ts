import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(
      private formBuilder: FormBuilder,
      private postsService: PostService,
      public navCtrl: NavController
    ) { }

  ngOnInit(): void {
    this.validaForm();
  }

  post: Post = {
    id: 0,
    username: "",
    description: "",
    created_at: "",
    isPublished: false
  }


  validaForm() {
    // Adicione a lógica de validação aqui
  }

}
