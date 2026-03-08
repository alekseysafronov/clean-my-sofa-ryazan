import jsPDF from "jspdf";

interface PdfServiceLine {
  label: string;
  qty: number;
  unit: string;
  price: number;
  lineTotal: number;
}

interface PdfParams {
  lines: PdfServiceLine[];
  subtotal: number;
  discount: { percent: number } | null;
  discountAmount: number;
  total: number;
  companyName?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  address?: string;
  inn?: string;
}

async function loadFont(url: string): Promise<string> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export async function generateProposalPdf(params: PdfParams) {
  const {
    lines,
    subtotal,
    discount,
    discountAmount,
    total,
    companyName,
    contactName,
    phone,
    email,
    address,
    inn,
  } = params;

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  // Load and embed Cyrillic fonts
  const [regularBase64, boldBase64] = await Promise.all([
    loadFont("/fonts/Roboto-Regular.ttf"),
    loadFont("/fonts/Roboto-Bold.ttf"),
  ]);

  doc.addFileToVFS("Roboto-Regular.ttf", regularBase64);
  doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
  doc.addFileToVFS("Roboto-Bold.ttf", boldBase64);
  doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");

  doc.setFont("Roboto", "normal");

  const pageW = doc.internal.pageSize.getWidth();
  const margin = 20;
  let y = 20;

  // --- Header ---
  doc.setFontSize(16);
  doc.setFont("Roboto", "bold");
  doc.text("Химчистка мягкой мебели и ковров", margin, y);
  doc.setFontSize(10);
  doc.setFont("Roboto", "normal");
  doc.setTextColor(100);
  doc.text("qweeq.ru", pageW - margin, y, { align: "right" });
  y += 4;
  doc.text("+7 (916) 043-51-53", pageW - margin, y + 4, { align: "right" });
  y += 12;

  // Divider
  doc.setDrawColor(200);
  doc.line(margin, y, pageW - margin, y);
  y += 10;

  // --- Title ---
  doc.setTextColor(0);
  doc.setFontSize(16);
  doc.setFont("Roboto", "bold");
  doc.text("Коммерческое предложение", margin, y);
  y += 8;

  // Date
  doc.setFontSize(10);
  doc.setFont("Roboto", "normal");
  doc.setTextColor(100);
  const today = new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
  doc.text(`от ${today}`, margin, y);
  y += 10;

  // --- Client info ---
  if (companyName || contactName || inn || phone || email || address) {
    doc.setTextColor(0);
    doc.setFontSize(11);
    doc.setFont("Roboto", "bold");
    doc.text("Заказчик:", margin, y);
    y += 6;
    doc.setFont("Roboto", "normal");
    doc.setFontSize(10);
    const clientLines: string[] = [];
    if (companyName) clientLines.push(`Организация: ${companyName}`);
    if (inn) clientLines.push(`ИНН: ${inn}`);
    if (contactName) clientLines.push(`Контакт: ${contactName}`);
    if (phone) clientLines.push(`Телефон: ${phone}`);
    if (email) clientLines.push(`Email: ${email}`);
    if (address) clientLines.push(`Адрес: ${address}`);
    clientLines.forEach((l) => {
      doc.text(l, margin, y);
      y += 5;
    });
    y += 4;
  }

  // --- Table header ---
  const colX = {
    num: margin,
    name: margin + 10,
    qty: pageW - margin - 80,
    price: pageW - margin - 50,
    total: pageW - margin - 20,
  };

  doc.setFillColor(245, 245, 245);
  doc.rect(margin, y - 4, pageW - 2 * margin, 8, "F");
  doc.setFontSize(9);
  doc.setFont("Roboto", "bold");
  doc.setTextColor(80);
  doc.text("№", colX.num, y);
  doc.text("Услуга", colX.name, y);
  doc.text("Кол-во", colX.qty, y, { align: "right" });
  doc.text("Цена", colX.price, y, { align: "right" });
  doc.text("Сумма", colX.total, y, { align: "right" });
  y += 7;

  // --- Table rows ---
  doc.setFont("Roboto", "normal");
  doc.setTextColor(0);
  doc.setFontSize(10);

  lines.forEach((line, i) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.text(`${i + 1}`, colX.num, y);
    doc.text(line.label, colX.name, y);
    doc.text(`${line.qty} ${line.unit}`, colX.qty, y, { align: "right" });
    doc.text(`${line.price.toLocaleString("ru-RU")} ₽`, colX.price, y, { align: "right" });
    doc.text(`${line.lineTotal.toLocaleString("ru-RU")} ₽`, colX.total, y, { align: "right" });
    y += 6;
  });

  y += 2;
  doc.setDrawColor(200);
  doc.line(margin, y, pageW - margin, y);
  y += 8;

  // --- Totals ---
  doc.setFontSize(10);
  if (discount) {
    doc.text("Подитого:", colX.price - 20, y, { align: "right" });
    doc.text(`${subtotal.toLocaleString("ru-RU")} ₽`, colX.total, y, { align: "right" });
    y += 6;

    doc.setTextColor(0, 128, 0);
    doc.text(`Скидка за объём (${discount.percent}%):`, colX.price - 20, y, { align: "right" });
    doc.text(`−${discountAmount.toLocaleString("ru-RU")} ₽`, colX.total, y, { align: "right" });
    y += 6;
    doc.setTextColor(0);
  }

  doc.setFontSize(12);
  doc.setFont("Roboto", "bold");
  doc.text("ИТОГО:", colX.price - 20, y, { align: "right" });
  doc.text(`от ${total.toLocaleString("ru-RU")} ₽`, colX.total, y, { align: "right" });
  y += 14;

  // --- Footer notes ---
  doc.setFontSize(9);
  doc.setFont("Roboto", "normal");
  doc.setTextColor(100);
  const notes = [
    "* Указана ориентировочная стоимость. Точная цена определяется после осмотра.",
    "* Работаем по безналичному расчёту. Предоставляем закрывающие документы.",
    "* Выезд мастера бесплатный по г. Рязань.",
  ];
  notes.forEach((n) => {
    doc.text(n, margin, y);
    y += 5;
  });

  // --- Our details ---
  y += 6;
  doc.setTextColor(80);
  doc.setFontSize(9);
  doc.text("ИП Сафронов Алексей Юрьевич  |  ИНН 623401087194", margin, y);
  y += 4;
  doc.text("Р/с 40802810620000900447  |  БИК 044525104  |  ООО «Банк Точка»", margin, y);

  // Save
  const filename = companyName
    ? `КП_${companyName.replace(/[^\w\dА-Яа-яёЁ ]/g, "").trim()}.pdf`
    : `Коммерческое_предложение_${today.replace(/ /g, "_")}.pdf`;
  doc.save(filename);
}
