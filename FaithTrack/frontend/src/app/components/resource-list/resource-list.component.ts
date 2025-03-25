import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngFor
import { ResourceService, Resource } from '../../../app/services/resource.service';

@Component({
  selector: 'app-resource-list',
  standalone: true,
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
  imports: [CommonModule, RouterModule] // ✅ Add required Angular modules
})
export class ResourceListComponent implements OnInit {
  resources: Resource[] = [];

  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.resourceService.getResources().subscribe({
      next: (data) => this.resources = data,
      error: (err) => console.error('Error loading resources:', err)
    });
  }

  deleteResource(id: number): void {
    if (confirm('Are you sure you want to delete this resource?')) {
      this.resourceService.deleteResource(id).subscribe({
        next: () => this.loadResources(),
        error: (err) => console.error('Error deleting resource:', err)
      });
    }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/resources/edit', id]);
  }
}
