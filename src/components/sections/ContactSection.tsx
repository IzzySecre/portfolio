"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import styles from "./ContactSection.module.css";

const CATEGORIES = [
  "Website Design",
  "Poster & Infographic",
  "Logo Design",
  "Photography",
  "Other",
] as const;

interface FormValues {
  name: string;
  email: string;
  category: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL: FormValues = {
  name: "",
  email: "",
  category: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.category) {
    errors.category = "Select a project category.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

interface ContactSectionProps {
  socials: { label: string; href: string }[];
}

export function ContactSection({ socials }: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function updateField(field: keyof FormValues, value: string) {
    setValues((prev) => {
      const next = { ...prev, [field]: value };
      const fieldErrors = validate(next);
      setErrors((prevErrors) => {
        const rest = { ...prevErrors };
        if (fieldErrors[field]) {
          rest[field] = fieldErrors[field];
        } else {
          delete rest[field];
        }
        return rest;
      });
      return next;
    });
    setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("success");
    setValues(INITIAL);
  }

  return (
    <section
      id="contact"
      className={`section ${styles.contact}`}
      aria-labelledby="contact-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.leftCol}>
          <p className={styles.eyebrow}>LET&apos;S CONNECT</p>
          <h2 id="contact-heading" className={`font-display ${styles.title}`}>
            CONTACT ME
          </h2>

          <div className={styles.avatar}>
            <Image
              src="/images/assets/profile/about-contact.webp"
              alt="Elha Catur Rohman"
              width={96}
              height={96}
              className={styles.avatarImage}
            />
          </div>

          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className={styles.socialLink}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.archives}>
            <a href="#projects" className={styles.archiveCard}>
              <span className={styles.archiveLabel}>PORTFOLIO</span>
              <span className={styles.archiveYear}>2024</span>
            </a>
            <a href="#projects" className={styles.archiveCard}>
              <span className={styles.archiveLabel}>ARCHIVE</span>
              <span className={styles.archiveYear}>2025</span>
            </a>
          </div>
        </div>

        <div className={styles.rightCol}>
          <p className={`font-display ${styles.thankYou}`}>THANK YOU 2026</p>
          <p className={styles.formLede}>
            Have a project in mind? Drop a message and I&apos;ll get back to
            you.
          </p>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="contact-form-status"
          >
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className={styles.input}
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                required
                minLength={2}
              />
              {errors.name && (
                <p
                  id="contact-name-error"
                  className={styles.error}
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className={styles.input}
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                required
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  className={styles.error}
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-category" className={styles.label}>
                Project Category
              </label>
              <select
                id="contact-category"
                name="category"
                className={styles.select}
                value={values.category}
                onChange={(event) => updateField("category", event.target.value)}
                aria-invalid={errors.category ? "true" : undefined}
                aria-describedby={
                  errors.category ? "contact-category-error" : undefined
                }
                required
              >
                <option value="">Select a category…</option>
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p
                  id="contact-category-error"
                  className={styles.error}
                  role="alert"
                >
                  {errors.category}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className={styles.textarea}
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={errors.message ? "true" : undefined}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                required
                minLength={10}
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  className={styles.error}
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className={styles.submit}>
              SEND MESSAGE
            </button>

            <div
              id="contact-form-status"
              className={styles.statusRegion}
              aria-live="polite"
            >
              {status === "success" && (
                <p className={styles.success} role="status">
                  Message ready. Thank you! I&apos;ll respond as soon as
                  possible.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
