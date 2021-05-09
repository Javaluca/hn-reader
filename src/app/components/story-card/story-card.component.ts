import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit, AfterViewInit {

  @Input() story: Story;

  private _color: string;

  @ViewChild('avatar', {static: false}) avatarDiv: ElementRef;

  private _colors: string[] = [
    '#e52165', '#0d1137',
    '#d72631', '#a2d5c6', '#077b8a', '#5c3c92',
    '#cf1578', '#e8d21d', '#039fbe', '#b20238',
    '#e75874', '#be1558', '#fbcbc9', '#322514',
    '#ef9d10', '#3b4d61', '#6b7b8c',
    '#ecc19c', '#1e847f',
    '#1e3d59', '#f5f0e1', '#ff6e40', '#ffc13b',
  ];

  constructor(private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
    this._color = this._colors[Math.floor(Math.random() * this._colors.length)];
    this.renderer.setStyle(this.avatarDiv.nativeElement, 'backgroundColor', this._color);
  }

  ngOnInit(): void {

  }

  get firstLetterAuthor(): string {
    if (!this.story || !this.story.by) {
      return '!';
    }
    return this.story.by.substr(0, 1).toLocaleLowerCase();
  }

}
