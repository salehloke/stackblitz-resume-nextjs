'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { ResumeData } from '../types/resume';
import { useResume } from '../context/ResumeContext';
import { useEffect, useState } from 'react';
import React from 'react';

export default function EditResume() {
  const { resumeData, updateResume, isDirty, setIsDirty } = useResume();
  const [isClient, setIsClient] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  
  const { register, control, handleSubmit, watch, reset, formState: { errors, isDirty: formIsDirty } } = useForm<ResumeData>({
    defaultValues: resumeData
  });

  const formValues = watch();

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({
    control,
    name: "experience"
  });

  const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({
    control,
    name: "education"
  });

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: "skills"
  });

  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Reset form when resumeData changes externally
  useEffect(() => {
    if (isClient) {
      reset(resumeData);
    }
  }, [resumeData, reset, isClient]);

  // Auto-save form changes to localStorage with proper status handling
  useEffect(() => {
    if (!isClient) return;

    const timeoutId = setTimeout(() => {
      if (formIsDirty) {
        setSaveStatus('saving');
        updateResume(formValues);
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2000);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [formValues, formIsDirty, updateResume, isClient]);

  // Mark form as dirty when changes are made
  useEffect(() => {
    if (isClient) {
      setIsDirty(formIsDirty);
    }
  }, [formIsDirty, setIsDirty, isClient]);

  const onSubmit = (data: ResumeData) => {
    updateResume(data);
    alert('Resume saved successfully!');
  };

  // Don't render form until client-side hydration is complete
  if (!isClient) {
    return <div className="max-w-4xl mx-auto p-6">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Personal Information</h2>
          {saveStatus === 'saving' && (
            <span className="text-yellow-600 text-sm">
              Auto-saving...
            </span>
          )}
          {saveStatus === 'saved' && (
            <span className="text-green-600 text-sm">
              Changes saved!
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              {...register("personalInfo.name", { required: "Name is required" })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              {...register("personalInfo.title", { required: "Title is required" })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("personalInfo.email", { required: "Email is required" })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              {...register("personalInfo.phone")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              {...register("personalInfo.location")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Summary</label>
            <textarea
              {...register("personalInfo.summary")}
              className="w-full p-2 border rounded"
              rows={4}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        {expFields.map((field, index) => (
          <div key={field.id} className="mb-6 p-4 border rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  {...register(`experience.${index}.company`)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Position</label>
                <input
                  {...register(`experience.${index}.position`)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <input
                  {...register(`experience.${index}.startDate`)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">End Date</label>
                <input
                  {...register(`experience.${index}.endDate`)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  {...register(`experience.${index}.description`)}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeExp(index)}
              className="mt-2 text-red-600 hover:text-red-800"
            >
              Remove Experience
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendExp({ company: "", position: "", startDate: "", endDate: "", description: "" })}
          className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Experience
        </button>

        <h2 className="text-2xl font-bold mb-6">Education</h2>
        {eduFields.map((field, index) => (
          <div key={field.id} className="mb-6 p-4 border rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">School</label>
                <input
                  {...register(`education.${index}.school`)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Degree</label>
                <input
                  {...register(`education.${index}.degree`)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Field</label>
                <input
                  {...register(`education.${index}.field`)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Graduation Date</label>
                <input
                  {...register(`education.${index}.graduationDate`)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeEdu(index)}
              className="mt-2 text-red-600 hover:text-red-800"
            >
              Remove Education
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendEdu({ school: "", degree: "", field: "", graduationDate: "" })}
          className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Education
        </button>

        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        {skillFields.map((field, index) => (
          <div key={field.id} className="mb-6 p-4 border rounded">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                {...register(`skills.${index}.category`)}
                className="w-full p-2 border rounded mb-2"
              />
              <label className="block text-sm font-medium mb-1">Skills (comma-separated)</label>
              <input
                {...register(`skills.${index}.items`, {
                  setValueAs: (value: any) => 
                    Array.isArray(value) 
                      ? value 
                      : typeof value === 'string'
                        ? value.split(',').map(item => item.trim()).filter(Boolean)
                        : []
                })}
                className="w-full p-2 border rounded"
                placeholder="e.g., JavaScript, TypeScript, React"
                defaultValue={Array.isArray(formValues.skills[index]?.items) 
                  ? formValues.skills[index].items.join(', ') 
                  : typeof formValues.skills[index]?.items === 'string'
                    ? formValues.skills[index].items
                    : ''}
              />
            </div>
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="mt-2 text-red-600 hover:text-red-800"
            >
              Remove Skill Category
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendSkill({ category: "", items: [] })}
          className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Skill Category
        </button>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Save Resume
          </button>
        </div>
      </div>
    </form>
  );
}
