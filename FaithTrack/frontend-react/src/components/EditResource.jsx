import React from 'react';
import ResourceForm from './ResourceForm';
import { useParams } from 'react-router-dom';

function EditResource() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="mb-3">Edit Resource</h2>
      <ResourceForm resourceId={id} />
    </div>
  );
}

export default EditResource;
