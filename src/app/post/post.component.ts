import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('img') postImg = '';
  @Output() ImgSelected = new EventEmitter<string>();

  constructor() {
    console.log('contrustor called()', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit called()', this.postImg);
  }
  ngOnChanges(): void {
    console.log('ngOnChanges() called');
  }
  ngDoCheck(): void {
    console.log('ngDocheck() called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }
}
