import { jsPDF } from 'jspdf';
import {
  EXTRACURRICULARS,
  LEADERSHIP_ROLES,
  PROFILE,
  PROJECTS,
  RESEARCH_AREAS,
  SKILL_GROUPS,
  WORK_EXPERIENCE,
} from '../data/portfolio';

const ACCENT: [number, number, number] = [93, 71, 60]; // #5D473C FlowCV warm espresso
const INK: [number, number, number] = [28, 28, 30];
const MUTED: [number, number, number] = [82, 82, 91];
const LIGHT_BG: [number, number, number] = [238, 234, 230];

const PAGE_W = 210; // A4 width mm
const PAGE_H = 297; // A4 height mm
const MARGIN_X = 14;
const CONTENT_W = PAGE_W - MARGIN_X * 2; // 182mm

type IconKind = 'briefcase' | 'folder' | 'wrench' | 'book' | 'cap' | 'award' | 'org';
type ContactIconKind = 'mail' | 'phone' | 'pin' | 'globe' | 'linkedin' | 'github' | 'kaggle';

function drawContactIcon(doc: jsPDF, kind: ContactIconKind, x: number, baselineY: number) {
  const cy = baselineY - 1.1;
  const cx = x + 1.5;
  doc.setDrawColor(...ACCENT);
  doc.setFillColor(...ACCENT);
  doc.setLineWidth(0.28);

  if (kind === 'mail') {
    doc.rect(cx - 1.5, cy - 1.05, 3.0, 2.1, 'S');
    doc.line(cx - 1.5, cy - 1.05, cx, cy + 0.15);
    doc.line(cx + 1.5, cy - 1.05, cx, cy + 0.15);
  } else if (kind === 'phone') {
    doc.roundedRect(cx - 0.95, cy - 1.45, 1.9, 2.9, 0.35, 0.35, 'S');
    doc.line(cx - 0.35, cy - 1.1, cx + 0.35, cy - 1.1);
    doc.circle(cx, cy + 1.05, 0.18, 'F');
  } else if (kind === 'pin') {
    doc.circle(cx, cy - 0.45, 0.95, 'S');
    doc.circle(cx, cy - 0.45, 0.28, 'F');
    doc.line(cx - 0.72, cy + 0.12, cx, cy + 1.4);
    doc.line(cx + 0.72, cy + 0.12, cx, cy + 1.4);
  } else if (kind === 'globe') {
    doc.circle(cx, cy, 1.35, 'S');
    doc.ellipse(cx, cy, 0.65, 1.35, 'S');
    doc.line(cx - 1.35, cy, cx + 1.35, cy);
  } else if (kind === 'linkedin') {
    doc.roundedRect(cx - 1.45, cy - 1.45, 2.9, 2.9, 0.45, 0.45, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.4);
    doc.setTextColor(255, 255, 255);
    doc.text('in', cx, cy + 0.65, { align: 'center' });
  } else if (kind === 'github') {
    doc.circle(cx, cy, 1.45, 'F');
    doc.setFillColor(255, 255, 255);
    doc.circle(cx, cy + 0.1, 0.72, 'F');
    doc.triangle(cx - 0.85, cy - 0.35, cx - 0.55, cy - 1.05, cx - 0.2, cy - 0.5, 'F');
    doc.triangle(cx + 0.85, cy - 0.35, cx + 0.55, cy - 1.05, cx + 0.2, cy - 0.5, 'F');
    doc.rect(cx - 0.32, cy + 0.65, 0.64, 0.75, 'F');
  } else {
    doc.roundedRect(cx - 1.45, cy - 1.45, 2.9, 2.9, 0.45, 0.45, 'S');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.setTextColor(...ACCENT);
    doc.text('k', cx, cy + 0.75, { align: 'center' });
  }
}

function drawContactRow(
  doc: jsPDF,
  items: { icon: ContactIconKind; label: string; url?: string }[],
  startX: number,
  y: number,
) {
  let curX = startX;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    drawContactIcon(doc, item.icon, curX, y);
    curX += 4.2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.9);
    doc.setTextColor(...INK);
    doc.text(item.label, curX, y);
    const w = doc.getTextWidth(item.label);
    if (item.url) {
      doc.link(curX - 4.2, y - 3.3, w + 4.5, 4.3, { url: item.url });
    }
    curX += w;

    if (i < items.length - 1) {
      doc.setTextColor(...MUTED);
      const sep = '   |   ';
      doc.text(sep, curX, y);
      curX += doc.getTextWidth(sep);
    }
  }
}

function drawSectionIcon(doc: jsPDF, kind: IconKind, cx: number, cy: number) {
  doc.setDrawColor(...ACCENT);
  doc.setFillColor(...ACCENT);
  doc.setLineWidth(0.32);

  if (kind === 'briefcase') {
    doc.rect(cx - 2.1, cy - 1.1, 4.2, 2.7, 'S');
    doc.rect(cx - 0.9, cy - 1.9, 1.8, 0.8, 'S');
    doc.line(cx - 2.1, cy - 0.1, cx + 2.1, cy - 0.1);
  } else if (kind === 'folder') {
    doc.rect(cx - 2.1, cy - 1.1, 4.2, 2.7, 'S');
    doc.line(cx - 2.1, cy - 1.1, cx - 1.5, cy - 1.8);
    doc.line(cx - 1.5, cy - 1.8, cx - 0.2, cy - 1.8);
    doc.line(cx - 0.2, cy - 1.8, cx + 0.3, cy - 1.1);
  } else if (kind === 'wrench') {
    doc.circle(cx - 1.1, cy - 0.8, 0.9, 'S');
    doc.line(cx - 0.4, cy - 0.1, cx + 1.8, cy + 1.6);
    doc.line(cx + 1.4, cy + 1.9, cx + 2.0, cy + 1.3);
  } else if (kind === 'book') {
    doc.rect(cx - 2.0, cy - 1.4, 2.0, 2.8, 'S');
    doc.rect(cx, cy - 1.4, 2.0, 2.8, 'S');
  } else if (kind === 'cap') {
    doc.line(cx, cy - 1.7, cx + 2.3, cy - 0.5);
    doc.line(cx + 2.3, cy - 0.5, cx, cy + 0.7);
    doc.line(cx, cy + 0.7, cx - 2.3, cy - 0.5);
    doc.line(cx - 2.3, cy - 0.5, cx, cy - 1.7);
    doc.line(cx - 1.3, cy + 0.1, cx - 1.3, cy + 1.4);
    doc.line(cx - 1.3, cy + 1.4, cx + 1.3, cy + 1.4);
    doc.line(cx + 1.3, cy + 1.4, cx + 1.3, cy + 0.1);
  } else if (kind === 'award') {
    doc.circle(cx, cy - 0.6, 1.3, 'S');
    doc.line(cx - 0.7, cy + 0.6, cx - 1.1, cy + 2.0);
    doc.line(cx + 0.7, cy + 0.6, cx + 1.1, cy + 2.0);
  } else {
    doc.rect(cx - 1.8, cy - 1.5, 3.6, 3.2, 'S');
    doc.line(cx - 0.7, cy - 0.6, cx - 0.7, cy + 0.2);
    doc.line(cx + 0.7, cy - 0.6, cx + 0.7, cy + 0.2);
    doc.rect(cx - 0.5, cy + 0.6, 1.0, 1.1, 'S');
  }
}

function drawSectionHeader(
  doc: jsPDF,
  title: string,
  icon: IconKind,
  x: number,
  y: number,
  w: number,
): number {
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(0.35);
  doc.line(x, y, x + w, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...ACCENT);
  const textW = doc.getTextWidth(title);
  const totalW = 6 + textW;
  const startX = x + (w - totalW) / 2;

  drawSectionIcon(doc, icon, startX + 2.2, y + 3.4);
  doc.text(title, startX + 6, y + 4.5);

  doc.line(x, y + 6.4, x + w, y + 6.4);
  return y + 10.5;
}

function drawBulletList(
  doc: jsPDF,
  items: string[],
  x: number,
  y: number,
  w: number,
  fontSize = 9.2,
  lineHeight = 4.1,
): number {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(...INK);

  let curY = y;
  for (const item of items) {
    const lines = doc.splitTextToSize(item, w - 4.5);
    doc.circle(x + 1.3, curY - 1.1, 0.55, 'F');
    doc.text(lines, x + 4.2, curY);
    curY += lines.length * lineHeight + 0.7;
  }
  return curY;
}

async function loadCircularPortraitDataUrl(src: string): Promise<string | null> {
  if (typeof window === 'undefined' || typeof document === 'undefined') return null;
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const size = 360;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(null);
        return;
      }

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      ctx.fillStyle = `rgb(${LIGHT_BG[0]}, ${LIGHT_BG[1]}, ${LIGHT_BG[2]})`;
      ctx.fillRect(0, 0, size, size);

      // Fit upper torso + head naturally inside circle
      const scale = Math.max(size / img.width, (size * 1.18) / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const dx = (size - drawW) / 2;
      const dy = 8;
      ctx.drawImage(img, dx, dy, drawW, drawH);

      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export function buildResumeDocument(portraitDataUrl: string | null): jsPDF {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  // ==================== PAGE 1 ====================
  let y = 16;

  // Top-right circular portrait (30mm)
  const avatarSize = 29;
  const avatarX = PAGE_W - MARGIN_X - avatarSize;
  const avatarY = 12;
  if (portraitDataUrl) {
    doc.addImage(portraitDataUrl, 'PNG', avatarX, avatarY, avatarSize, avatarSize);
  } else {
    doc.setFillColor(...LIGHT_BG);
    doc.circle(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(...ACCENT);
    doc.text('MP', avatarX + avatarSize / 2, avatarY + avatarSize / 2 + 2, { align: 'center' });
  }

  // Name & Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...ACCENT);
  doc.text(PROFILE.name, MARGIN_X, y);

  y += 6.2;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(11.5);
  doc.setTextColor(...ACCENT);
  doc.text('Web Developer · Full-Stack JavaScript & AI Automation', MARGIN_X, y);

  // Contact info with related icons (3 compact rows left of headshot)
  y += 6.4;
  drawContactRow(
    doc,
    [
      { icon: 'mail', label: PROFILE.email, url: `mailto:${PROFILE.email}` },
      { icon: 'phone', label: PROFILE.phone, url: `tel:${PROFILE.phone}` },
      { icon: 'globe', label: 'mursalineparvez.vercel.app', url: PROFILE.portfolio },
    ],
    MARGIN_X,
    y,
  );

  y += 4.9;
  drawContactRow(
    doc,
    [
      { icon: 'pin', label: PROFILE.location },
      { icon: 'linkedin', label: 'linkedin.com/in/mursalineparvez', url: PROFILE.linkedin },
    ],
    MARGIN_X,
    y,
  );

  y += 4.9;
  drawContactRow(
    doc,
    [
      { icon: 'github', label: 'github.com/Mursalineparvez', url: PROFILE.github },
      { icon: 'kaggle', label: 'kaggle.com/mdmursalineparvez', url: PROFILE.kaggle },
    ],
    MARGIN_X,
    y,
  );

  y = Math.max(y + 6.5, avatarY + avatarSize + 4);

  // Summary paragraph
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.4);
  doc.setTextColor(...INK);
  const summaryLines = doc.splitTextToSize(PROFILE.summary, CONTENT_W);
  doc.text(summaryLines, MARGIN_X, y);
  y += summaryLines.length * 4.2 + 4;

  // Professional Experience (All 3 roles)
  y = drawSectionHeader(doc, 'Professional Experience', 'briefcase', MARGIN_X, y, CONTENT_W);

  for (const exp of WORK_EXPERIENCE) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.8);
    doc.setTextColor(...INK);
    doc.text(`${exp.role}, `, MARGIN_X, y);
    const roleW = doc.getTextWidth(`${exp.role}, `);
    doc.setFont('helvetica', 'italic');
    doc.text(exp.company, MARGIN_X + roleW, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.9);
    doc.setTextColor(...MUTED);
    doc.text(exp.type, PAGE_W - MARGIN_X, y, { align: 'right' });

    y += 4.3;
    y = drawBulletList(doc, exp.highlights.slice(0, 3), MARGIN_X + 1, y, CONTENT_W - 2, 8.9, 3.85);
    y += 1.8;
  }
  y += 1.5;

  // Projects (Page 1: Projects 01–04)
  y = drawSectionHeader(doc, 'Projects', 'folder', MARGIN_X, y, CONTENT_W);

  const page1Projects = PROJECTS.slice(0, 4);
  for (const project of page1Projects) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.6);
    doc.setTextColor(...INK);
    const titlePrefix = `${project.title} `;
    doc.text(titlePrefix, MARGIN_X, y);
    const titleW = doc.getTextWidth(titlePrefix);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.8);
    doc.setTextColor(...MUTED);
    const stackStr = `· ${project.stack.slice(0, 4).join(', ')}`;
    const availStackW = CONTENT_W - titleW;
    const fittedStack = doc.splitTextToSize(stackStr, Math.max(availStackW, 40))[0];
    doc.text(fittedStack, MARGIN_X + titleW, y);

    y += 4.1;
    const bullets = project.highlights.slice(0, 2);
    if (project.links.length > 0) {
      const linkText = project.links
        .slice(0, 2)
        .map((l) => `${l.label}: ${l.url}`)
        .join('  |  ');
      bullets.push(linkText);
    }
    y = drawBulletList(doc, bullets, MARGIN_X + 1, y, CONTENT_W - 2, 8.7, 3.75);
    y += 1.8;
  }

  // ==================== PAGE 2 ====================
  doc.addPage();
  y = 16;

  // Remaining Projects (05–07)
  const page2Projects = PROJECTS.slice(4);
  for (const project of page2Projects) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.6);
    doc.setTextColor(...INK);
    const titlePrefix = `${project.title} `;
    doc.text(titlePrefix, MARGIN_X, y);
    const titleW = doc.getTextWidth(titlePrefix);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.8);
    doc.setTextColor(...MUTED);
    const stackStr = `· ${project.stack.slice(0, 4).join(', ')}`;
    const availStackW = CONTENT_W - titleW;
    const fittedStack = doc.splitTextToSize(stackStr, Math.max(availStackW, 40))[0];
    doc.text(fittedStack, MARGIN_X + titleW, y);

    y += 4.1;
    const bullets = project.highlights.slice(0, 1);
    if (project.links.length > 0) {
      bullets.push(project.links.map((l) => `${l.label}: ${l.url}`).join('  |  '));
    }
    y = drawBulletList(doc, bullets, MARGIN_X + 1, y, CONTENT_W - 2, 8.7, 3.75);
    y += 1.8;
  }

  y += 2;

  // Two-column section on Page 2 (mirrors FlowCV page 2)
  const colGap = 8;
  const colW = (CONTENT_W - colGap) / 2; // ~87mm each
  const leftX = MARGIN_X;
  const rightX = MARGIN_X + colW + colGap;

  // LEFT COLUMN: Technical Skills + Education
  let leftY = drawSectionHeader(doc, 'Technical Skills', 'wrench', leftX, y, colW);

  for (const group of SKILL_GROUPS.slice(0, 5)) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.4);
    doc.setTextColor(...INK);
    doc.text(group.title, leftX, leftY);
    leftY += 4.1;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.9);
    doc.setTextColor(...INK);
    const skillLines = doc.splitTextToSize(group.items.join(', '), colW);
    doc.text(skillLines, leftX, leftY);
    leftY += skillLines.length * 3.9 + 2.6;
  }

  leftY += 1.5;
  leftY = drawSectionHeader(doc, 'Education', 'cap', leftX, leftY, colW);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...INK);
  const instLines = doc.splitTextToSize(PROFILE.education.institution, colW);
  doc.text(instLines, leftX, leftY);
  leftY += instLines.length * 4.0;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.0);
  doc.setTextColor(...INK);
  const degLines = doc.splitTextToSize(PROFILE.education.degree, colW);
  doc.text(degLines, leftX, leftY);
  leftY += degLines.length * 4.0 + 0.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(...MUTED);
  doc.text(PROFILE.education.location, leftX, leftY);
  leftY += 5;

  // RIGHT COLUMN: Research & Publications + Extracurricular Activities
  let rightY = drawSectionHeader(doc, 'Research & Publications', 'book', rightX, y, colW);

  for (const area of RESEARCH_AREAS) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.3);
    doc.setTextColor(...INK);
    const titleLines = doc.splitTextToSize(area.title, colW);
    doc.text(titleLines, rightX, rightY);
    rightY += titleLines.length * 4.0 + 0.5;

    rightY = drawBulletList(doc, area.focusPoints.slice(0, 3), rightX + 1, rightY, colW - 1, 8.7, 3.8);
    rightY += 2.2;
  }

  rightY += 1.5;
  rightY = drawSectionHeader(doc, 'Extracurricular Activities', 'award', rightX, rightY, colW);

  for (const track of EXTRACURRICULARS) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.2);
    doc.setTextColor(...INK);
    doc.text(track.title, rightX, rightY);
    rightY += 4.0;
    rightY = drawBulletList(doc, track.points.slice(0, 2), rightX + 1, rightY, colW - 1, 8.6, 3.8);
    rightY += 1.8;
  }

  // FULL-WIDTH BOTTOM: Leadership & Organizations
  let orgY = Math.max(leftY, rightY) + 3;
  orgY = drawSectionHeader(doc, 'Leadership & Organizations', 'org', MARGIN_X, orgY, CONTENT_W);

  for (const org of LEADERSHIP_ROLES) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.6);
    doc.setTextColor(...INK);
    const orgPrefix = `${org.organization}, `;
    doc.text(orgPrefix, MARGIN_X, orgY);
    const ow = doc.getTextWidth(orgPrefix);

    doc.setFont('helvetica', 'italic');
    doc.text(org.role, MARGIN_X + ow, orgY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.9);
    doc.setTextColor(...MUTED);
    doc.text(org.period, PAGE_W - MARGIN_X, orgY, { align: 'right' });

    orgY += 4.1;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(...INK);
    const summaryLine = doc.splitTextToSize(org.highlights.slice(0, 2).join(' '), CONTENT_W);
    doc.text(summaryLine, MARGIN_X, orgY);
    orgY += summaryLine.length * 3.8 + 2.8;
  }

  return doc;
}

export async function downloadResumePdf(): Promise<void> {
  const portraitDataUrl = await loadCircularPortraitDataUrl(PROFILE.portrait);
  const doc = buildResumeDocument(portraitDataUrl);
  doc.save('Md-Mursaline-Parvez-Resume.pdf');
}
