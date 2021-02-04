import { Component, OnInit, Input } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

const BasicComponentEditConfig = {
  emptyLabel: 'Basic Component',
  isEmpty: cqModel =>
    !cqModel || !cqModel.text || cqModel.text.trim().length < 1
};


@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.css']
})

export class BasicComponentComponent implements OnInit {

  @Input() text: string;
  @Input() checkbox: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

MapTo('angularjs-simple-example/components/basic-component')(
  BasicComponentComponent,
  BasicComponentEditConfig
);
