import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnChanges, DoCheck {
  @Input('img') postImg = '';
  @Output() ImgSelected = new EventEmitter<string>();

  constructor() {
    console.log('contrustor called()', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit called()', this.postImg);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called');
  }
  ngDoCheck(): void {
    console.log('ngDocheck()');
  }
}
