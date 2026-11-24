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

  // Contact info (2 compact rows on left of headshot)
  y += 6.8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(...INK);

  const row1 = `${PROFILE.email}   |   ${PROFILE.phone}   |   ${PROFILE.location}`;
  doc.text(row1, MARGIN_X, y);
  doc.link(MARGIN_X, y - 3.5, doc.getTextWidth(PROFILE.email), 4.5, { url: `mailto:${PROFILE.email}` });

  y += 5;
  const linkedInLabel = 'linkedin.com/in/mursalineparvez';
  const githubLabel = 'github.com/Mursalineparvez';
  const kaggleLabel = 'kaggle.com/mdmursalineparvez';
  const row2 = `${linkedInLabel}   |   ${githubLabel}   |   ${kaggleLabel}`;
  doc.text(row2, MARGIN_X, y);

  const liW = doc.getTextWidth(linkedInLabel);
  const sepW = doc.getTextWidth('   |   ');
  const ghW = doc.getTextWidth(githubLabel);
  const kgW = doc.getTextWidth(kaggleLabel);
  doc.link(MARGIN_X, y - 3.5, liW, 4.5, { url: PROFILE.linkedin });
  doc.link(MARGIN_X + liW + sepW, y - 3.5, ghW, 4.5, { url: PROFILE.github });
  doc.link(MARGIN_X + liW + sepW + ghW + sepW, y - 3.5, kgW, 4.5, { url: PROFILE.kaggle });

  y = Math.max(y + 7.5, avatarY + avatarSize + 4);

  // Summary paragraph
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.4);
  doc.setTextColor(...INK);
  const fullSummary = `${PROFILE.summary} Research interests include Bangla Natural Language Processing (NLP), grammatical error correction, and machine learning.`;
  const summaryLines = doc.splitTextToSize(fullSummary, CONTENT_W);
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
