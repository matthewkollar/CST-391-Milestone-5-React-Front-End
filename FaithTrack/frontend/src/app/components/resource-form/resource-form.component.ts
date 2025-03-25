import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceService } from '../../../app/services/resource.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ResourceFormComponent implements OnInit {
  resourceForm!: FormGroup;
  isEditMode = false;
  resourceId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.resourceForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category_id: [null, [Validators.required, Validators.min(1)]],
      scripture: ['', [Validators.required]]
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.resourceId = +id;
        this.loadResource(this.resourceId);
      }
    });
  }

  loadResource(id: number): void {
    this.resourceService.getResourceById(id).subscribe({
      next: (data) => this.resourceForm.patchValue(data),
      error: (err) => console.error('Error loading resource:', err)
    });
  }

  onSubmit(): void {
    if (this.resourceForm.invalid) {
      this.resourceForm.markAllAsTouched();
      return;
    }

    const formData = this.resourceForm.value;

    if (this.isEditMode && this.resourceId) {
      this.resourceService.updateResource(this.resourceId, formData).subscribe(() => {
        this.router.navigate(['/resources']);
      });
    } else {
      this.resourceService.createResource(formData).subscribe(() => {
        this.router.navigate(['/resources']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/resources']);
  }

  // Handy getter to clean up template
  get f() {
    return this.resourceForm.controls;
  }
}
