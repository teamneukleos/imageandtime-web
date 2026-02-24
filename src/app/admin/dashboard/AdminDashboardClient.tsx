"use client";

import { useState } from "react";
import { createJob, updateJob, deleteJob, toggleJob } from "@/app/admin/action";

type Job = {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  active: boolean;
  createdAt: string;
};

type FormState = {
  title: string;
  type: string;
  location: string;
  description: string;
};

type Toast = {
  msg: string;
  type: "success" | "error";
};

const emptyForm: FormState = { title: "", type: "Full-time", location: "", description: "" };

export default function AdminDashboardClient({ jobs: initialJobs }: { jobs: Job[] }) {
  
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [toast, setToast] = useState<Toast | null>(null);
  const [loading, setLoading] = useState(false);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async () => {
    if (!form.title || !form.location || !form.description) return;
    setLoading(true);

    try {
      if (editingId) {
        await updateJob(editingId, form);
        setJobs((prev) => prev.map((j) => (j.id === editingId ? { ...j, ...form } : j)));
        showToast("Job updated successfully");
      } else {
        await createJob(form);
        showToast("Job posted successfully");
        window.location.reload();
      }
    } catch {
      showToast("Something went wrong", "error");
    }

    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
    setLoading(false);
  };

  const handleEdit = (job: Job) => {
    setForm({ title: job.title, type: job.type, location: job.location, description: job.description });
    setEditingId(job.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteJob(id);
      setJobs((prev) => prev.filter((j) => j.id !== id));
      showToast("Job deleted", "error");
    } catch {
      showToast("Failed to delete job", "error");
    }
    setDeleteConfirm(null);
  };

  const handleToggle = async (id: string, current: boolean) => {
    try {
      await toggleJob(id, !current);
      setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, active: !current } : j)));
    } catch {
      showToast("Failed to update job", "error");
    }
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const activeCount = jobs.filter((j) => j.active).length;

  return (
    <div style={{ fontFamily: "'DM Mono', monospace", background: "#111111", minHeight: "100vh", color: "#e8e8e8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .sidebar {
          position: fixed; top: 0; left: 0; width: 220px; height: 100vh;
          background: #111111; border-right: 1px solid #1e1e1e;
          display: flex; flex-direction: column; padding: 32px 24px; gap: 8px; z-index: 10;
        }

        .nav-item {
          display: flex; align-items: center; gap: 10px; padding: 10px 14px;
          border-radius: 8px; font-size: 12px; letter-spacing: 0.08em;
          text-transform: uppercase; color: #666; cursor: pointer;
          transition: all 0.2s; border: none; background: none; width: 100%; text-align: left;
        }

        .nav-item.active { background: #1e1e1e; color: #fff; }
        .nav-item:hover:not(.active) { background: #1a1a1a; color: #aaa; }

        .main { margin-left: 220px; padding: 40px 48px; }

        .topbar {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 40px;
        }

        .page-title {
          font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 700; color: #fff;
        }

        .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 8px; font-size: 12px;
          font-family: 'DM Mono', monospace; letter-spacing: 0.08em;
          text-transform: uppercase; cursor: pointer; transition: all 0.2s; border: none;
        }

        .btn-primary { background: #fff; color: #000; font-weight: 500; }
        .btn-primary:hover { background: #e8e8e8; }
        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-ghost { background: transparent; color: #666; border: 1px solid #2a2a2a; }
        .btn-ghost:hover { border-color: #444; color: #aaa; }
        .btn-danger { background: transparent; color: #ff4444; border: 1px solid #2a1a1a; }
        .btn-danger:hover { background: #1a0a0a; }

        .stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 40px;
        }

        .stat-card {
          background: #1a1a1a; border: 1px solid #222; border-radius: 12px;
          padding: 24px; position: relative; overflow: hidden;
        }

        .stat-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: #fff; opacity: 0.15;
        }

        .stat-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #555; margin-bottom: 12px; }
        .stat-value { font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 700; color: #fff; }
        .stat-sub { font-size: 11px; color: #444; margin-top: 6px; }

        .form-panel {
          background: #1a1a1a; border: 1px solid #222; border-radius: 12px;
          padding: 32px; margin-bottom: 32px;
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .form-title {
          font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700;
          color: #fff; margin-bottom: 24px;
          display: flex; align-items: center; gap: 10px;
        }

        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }

        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group.full { grid-column: 1 / -1; }

        label { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #555; }

        input, select, textarea {
          background: #111111; border: 1px solid #2a2a2a; border-radius: 8px;
          padding: 12px 14px; color: #e8e8e8; font-family: 'DM Mono', monospace;
          font-size: 13px; outline: none; transition: border-color 0.2s; width: 100%;
        }

        input:focus, select:focus, textarea:focus { border-color: #fff; }
        select option { background: #1a1a1a; }
        textarea { resize: vertical; min-height: 100px; }

        .form-actions { display: flex; gap: 12px; margin-top: 24px; justify-content: flex-end; }

        .jobs-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px;
        }

        .jobs-label {
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #444;
        }

        .job-card {
          background: #1a1a1a; border: 1px solid #222; border-radius: 12px;
          padding: 24px 28px; margin-bottom: 12px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          transition: border-color 0.2s;
        }

        .job-card:hover { border-color: #333; }
        .job-card.inactive { opacity: 0.5; }

        .job-info { flex: 1; }

        .job-title {
          font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 600;
          color: #fff; margin-bottom: 6px;
        }

        .job-meta { display: flex; align-items: center; gap: 16px; }

        .tag {
          font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 4px; background: #222; color: #666;
        }

        .tag.type { color: #fff; background: #2a2a2a; }

        .job-actions { display: flex; align-items: center; gap: 8px; }

        .toggle {
          width: 40px; height: 22px; border-radius: 11px; border: none;
          cursor: pointer; transition: background 0.3s; position: relative; flex-shrink: 0;
        }

        .toggle.on { background: #fff; }
        .toggle.off { background: #2a2a2a; }

        .toggle::after {
          content: ''; position: absolute; top: 3px;
          width: 16px; height: 16px; border-radius: 50%; background: #111111;
          transition: left 0.3s;
        }

        .toggle.on::after { left: 21px; }
        .toggle.off::after { left: 3px; }

        .icon-btn {
          width: 34px; height: 34px; border-radius: 8px; border: 1px solid #222;
          background: transparent; cursor: pointer; display: flex; align-items: center;
          justify-content: center; color: #555; transition: all 0.2s; font-size: 14px;
        }

        .icon-btn:hover { border-color: #333; color: #aaa; }
        .icon-btn.delete:hover { border-color: #2a1010; color: #ff4444; background: #0f0808; }

        .empty-state {
          text-align: center; padding: 64px 32px;
          border: 1px dashed #222; border-radius: 12px; color: #333;
        }

        .empty-state .icon { font-size: 32px; margin-bottom: 16px; }
        .empty-state p { font-size: 13px; }

        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.8);
          display: flex; align-items: center; justify-content: center; z-index: 100;
          backdrop-filter: blur(4px);
        }

        .modal {
          background: #1a1a1a; border: 1px solid #222; border-radius: 16px;
          padding: 32px; max-width: 380px; width: 90%;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal-title {
          font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: #fff;
          margin-bottom: 10px;
        }

        .modal-text { font-size: 13px; color: #555; margin-bottom: 28px; line-height: 1.6; }
        .modal-actions { display: flex; gap: 12px; justify-content: flex-end; }

        .toast {
          position: fixed; bottom: 32px; right: 32px;
          padding: 14px 20px; border-radius: 10px; font-size: 12px;
          letter-spacing: 0.06em; z-index: 200;
          animation: toastIn 0.3s ease;
        }

        .toast.success { background: #1a1a1a; border: 1px solid #fff; color: #fff; }
        .toast.error { background: #1a0808; border: 1px solid #ff4444; color: #ff4444; }

        @keyframes toastIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <img src="/logo/logo.svg" alt="Logo" style={{ width: 120, height: "auto", marginBottom: 32, objectFit: "contain" }} />
        <button className="nav-item active">
          <span>▪</span> Jobs
        </button>
        
      </div>

      {/* Main */}
      <div className="main">
        <div className="topbar">
          <div>
            <div className="page-title">Job Listings</div>
            <div style={{ fontSize: 12, color: "#444", marginTop: 4 }}>Manage open positions</div>
          </div>
          <button className="btn btn-primary" onClick={() => { setShowForm(!showForm); setEditingId(null); setForm(emptyForm); }}>
            + New Position
          </button>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <div className="stat-label">Total Jobs</div>
            <div className="stat-value">{jobs.length}</div>
            <div className="stat-sub">All positions</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Active</div>
            <div className="stat-value">{activeCount}</div>
            <div className="stat-sub">Currently live</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Inactive</div>
            <div className="stat-value">{jobs.length - activeCount}</div>
            <div className="stat-sub">Hidden from site</div>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="form-panel">
            <div className="form-title">
              <span style={{ color: "#fff" }}>◆</span>
              {editingId ? "Edit Position" : "Post New Position"}
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Job Title</label>
                <input
                  placeholder="e.g. Senior Designer"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                  <option>Internship</option>
                </select>
              </div>
              <div className="form-group full">
                <label>Location</label>
                <input
                  placeholder="e.g. Lagos, Nigeria or Remote"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>
              <div className="form-group full">
                <label>Description</label>
                <textarea
                  placeholder="Describe the role and responsibilities..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-ghost" onClick={handleCancel} disabled={loading}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
                {loading ? "Saving..." : editingId ? "Save Changes" : "Post Job"}
              </button>
            </div>
          </div>
        )}

        {/* Jobs List */}
        <div className="jobs-header">
          <div className="jobs-label">{jobs.length} position{jobs.length !== 1 ? "s" : ""}</div>
        </div>

        {jobs.length === 0 ? (
          <div className="empty-state">
            <div className="icon">◻</div>
            <p>No positions yet. Click "New Position" to add one.</p>
          </div>
        ) : (
          jobs.map((job: Job) => (
            <div key={job.id} className={`job-card ${!job.active ? "inactive" : ""}`}>
              <div className="job-info">
                <div className="job-title">{job.title}</div>
                <div className="job-meta">
                  <span className="tag type">{job.type}</span>
                  <span className="tag">{job.location}</span>
                  <span style={{ fontSize: 11, color: "#333" }}>{job.createdAt}</span>
                </div>
              </div>
              <div className="job-actions">
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 8 }}>
                  <span style={{ fontSize: 10, color: "#444", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {job.active ? "Live" : "Off"}
                  </span>
                  <button className={`toggle ${job.active ? "on" : "off"}`} onClick={() => handleToggle(job.id, job.active)} />
                </div>
                <button className="icon-btn" onClick={() => handleEdit(job)} title="Edit">✎</button>
                <button className="icon-btn delete" onClick={() => setDeleteConfirm(job.id)} title="Delete">✕</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Modal */}
      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">Delete this position?</div>
            <div className="modal-text">
              This will permanently remove the job listing. This action cannot be undone.
            </div>
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setDeleteConfirm(null)}>Cancel</button>
              <button className="btn btn-danger" onClick={() => handleDelete(deleteConfirm)}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className={`toast ${toast.type}`}>{toast.msg}</div>
      )}
    </div>
  );
}