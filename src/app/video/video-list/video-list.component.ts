import { Component, OnInit } from '@angular/core';
import { pictures } from '../../pictures';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

pictures = pictures;

videoType = '';

  onKey(videoType: string) {
    this.videoType = videoType.toUpperCase() ;
  }


  constructor() { }

  ngOnInit() {
  }

}

