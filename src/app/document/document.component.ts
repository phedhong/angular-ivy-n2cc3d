import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
  providers: [UploadService]
})
export class DocumentComponent implements OnInit {
  heroes: Document[] = [];
  selectedHero: Document | undefined;

  constructor(private service: UploadService) { }

  ngOnInit() {
    this.heroes = this.service.getDocuments();
  }

  selectHero(document: Document) { this.selectedDocument = document; }
}