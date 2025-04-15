import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import resourceService from '../services/resourceService';

function ResourceForm({ resourceId }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const isEditMode = !!resourceId;

  const onSubmit = async (data) => {
    try {
      if (isEditMode) {
        await resourceService.updateResource(resourceId, data);
      } else {
        await resourceService.createResource(data);
      }
      navigate('/resources');
    } catch (err) {
      console.error('Save error:', err);
    }
  };

  useEffect(() => {
    if (isEditMode) {
      resourceService.getResourceById(resourceId).then((res) => {
        const fields = ['title', 'description', 'category_id', 'scripture'];
        fields.forEach((field) => setValue(field, res[field]));
      });
    }
  }, [resourceId, setValue, isEditMode]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Title */}
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          {...register('title', { required: true, minLength: 3 })}
        />
        {errors.title && (
          <div className="invalid-feedback">
            Title is required and must be at least 3 characters.
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          {...register('description', { required: true, minLength: 10 })}
        />
        {errors.description && (
          <div className="invalid-feedback">
            Description must be at least 10 characters.
          </div>
        )}
      </div>

      {/* Category ID */}
      <div className="mb-3">
        <label className="form-label">Category ID</label>
        <input
          type="number"
          className={`form-control ${errors.category_id ? 'is-invalid' : ''}`}
          {...register('category_id', { required: true, min: 1 })}
        />
        {errors.category_id && (
          <div className="invalid-feedback">
            Category ID is required and must be at least 1.
          </div>
        )}
      </div>

      {/* Scripture */}
      <div className="mb-3">
        <label className="form-label">Scripture</label>
        <input
          className={`form-control ${errors.scripture ? 'is-invalid' : ''}`}
          {...register('scripture', { required: true })}
        />
        {errors.scripture && (
          <div className="invalid-feedback">Scripture is required.</div>
        )}
      </div>

      <button type="submit" className="btn btn-success">
        {isEditMode ? 'Update' : 'Create'}
      </button>
      <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={() => navigate('/resources')}
      >
        Cancel
      </button>
    </form>
  );
}

export default ResourceForm;
