import { type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";

const fieldClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 focus-visible:outline-2 focus-visible:outline-deep";

export function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink">
        {label} {required && <span className="text-deep">*</span>}
      </label>
      {hint && <p className="text-xs text-ink-soft">{hint}</p>}
      {children}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldClasses} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldClasses} ${props.className ?? ""}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <select {...props} className={`${fieldClasses} ${props.className ?? ""}`}>
      {props.children}
    </select>
  );
}

export function CheckboxField({
  id,
  name,
  required,
  children,
}: {
  id: string;
  name: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        name={name}
        type="checkbox"
        required={required}
        className="mt-1 h-4 w-4 shrink-0 rounded border-ink/30 text-deep focus-visible:outline-2 focus-visible:outline-deep"
      />
      <label htmlFor={id} className="text-sm leading-relaxed text-ink-soft">
        {children}
      </label>
    </div>
  );
}

/** Bot trap: real visitors never see or fill this field. */
export function Honeypot() {
  return (
    <div className="hidden" aria-hidden="true">
      <label htmlFor="company">Company</label>
      <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormNotice({ status }: { status: "success" | "error" | null }) {
  if (!status) return null;
  if (status === "success") {
    return (
      <p className="animate-fade-in rounded-xl bg-berry/10 px-4 py-3 text-sm font-medium text-deep" role="status">
        Thank you — we&apos;ve received your submission and will be in touch.
      </p>
    );
  }
  return (
    <p className="animate-fade-in rounded-xl bg-deep/10 px-4 py-3 text-sm font-medium text-deep" role="alert">
      Something went wrong sending your form. Please try again, or email us directly.
    </p>
  );
}
