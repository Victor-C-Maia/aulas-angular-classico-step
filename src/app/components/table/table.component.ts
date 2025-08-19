import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource: any[] = [];

  constructor(private jsonService: JsonplaceholderService) {}

  ngOnInit(): void {
    this.jsonService.getUsers().subscribe((data: any) => {
      this.dataSource = data;
    });
  }
}
