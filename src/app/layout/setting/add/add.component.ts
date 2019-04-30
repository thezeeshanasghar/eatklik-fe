import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/_model/setting';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  setting = new Setting();

  constructor(private settingService: SettingService, private router: Router) {
  }

  ngOnInit() {}

  onSubmit() {
    this.settingService.addSetting(this.setting).subscribe(
      res => {
        this.router.navigate(['/setting']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
