import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import {Observable} from "rxjs";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent {
  constructor(private _projectsService: ProjectsService) {
  }
  data$: Observable<ProjectModel[] | null> = this._projectsService.getAll()
}
