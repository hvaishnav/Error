import { Component, OnInit } from '@angular/core';
import { SuperTable,ISuperTableColumn,ISuperTableOptions,superTableSorters,superTableFilters } from 'ngx-super-table';

@Component({
  selector: 'app-super-tbl',
  templateUrl: './super-tbl.component.html',
  styleUrls: ['./super-tbl.component.scss']
})
export class SuperTblComponent implements OnInit {

  tableClasses: string[] = ['table', 'table-bordered'];
  rows = [
    { name: 'thing1', age: 7,col:'jo',col4:'qawff'},
    { name: 'thingx', age: 7,col:'45', col4:'qarff'},
    { name: 'cat', age: 10,col:'j778o', col4:'qrff'},
    { name: 'fish', age: 1,col:'jdfg7to', col4:'qawse'},
  ];
  columns: ISuperTableColumn[] = [
    {
      id: 'name',
      key: 'name',
      label: 'Name',
      sort: superTableSorters.STRING,
      filter: superTableFilters.STRING
    },
    {
      id: 'age',
      key: 'age',
      label: 'Age',
      sort: superTableSorters.NUMBER,
      filter: superTableFilters.NUMBER
    },
    {
      id: 'col',
      key: 'col',
      label: 'col-3',
      sort: superTableSorters.STRING,
      filter: superTableFilters.STRING
    },
    {
      id: 'col4',
      key: 'col4',
      label: 'col-4',
      sort: superTableSorters.STRING,
      filter: superTableFilters.STRING
    }
  ];
  options : ISuperTableOptions = {
    autoHeight: true // auto size the table to the parent element
  };

  constructor() { }

  ngOnInit() {
  }
}
