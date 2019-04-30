import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Setting } from 'src/app/_model/setting';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingService } from 'src/app/shared/services/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  animations: [routerTransition()]
})
export class SettingComponent implements OnInit {

  settings: Setting[];
  isLoading = true;

  constructor(private settingService: SettingService, private modalService: NgbModal) {}

  ngOnInit() {
    this.getSettings();
  }

  getSettings() {
    this.settingService.getAll().subscribe(
      res => {
        this.settings = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  open(content, Id: string) {
    this.modalService.open(content).result.then(result => {
      if (result === 'Yes') {
        this.settingService.deleteSetting(Id).subscribe(
          res => {
            this.getSettings();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
