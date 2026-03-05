export function getResumeInfo() {
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - 2018
  return {
    currentYear,
    yearsOfExperience,
    zh: {
      title: `朱杨松简历-前端工程师-${yearsOfExperience}年-${currentYear}`,
      pdfUrl: `/朱杨松简历-前端工程师-${yearsOfExperience}年-${currentYear}.pdf`,
    },
    en: {
      title: `Yangsong-Zhu's Resume-Front-end-Engineer-${yearsOfExperience}-years-${currentYear}`,
      pdfUrl: `/Yangsong-Zhu's Resume-Front-end-Engineer-${yearsOfExperience}-years-${currentYear}.pdf`,
    },
  }
}
