const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 110;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const projects = [
  {
    id: "rsg-tech-website",
    title: "RSG TECH Website",
    category: "website",
    short:
      "A modern brand website built to showcase services, projects, and contact options.",
    tags: ["Website", "Responsive Design", "Branding"],
    overview:
      "The RSG TECH website is designed as a professional online presence for a technology solutions brand. It presents services, project examples, company information, and a contact path in a clean and modern layout.",
    problem:
      "A technology brand needs more than a basic page. The website needs to create trust, explain services clearly, and show visitors what kind of quality they can expect.",
    solution:
      "The site uses a premium dark tech style, service sections, project previews, interactive elements, and clear call-to-action buttons to guide visitors toward contacting RSG TECH.",
    features: [
      "Responsive multi-page website",
      "Modern dark visual style",
      "Service overview sections",
      "Project showcase area",
      "Contact page and project request form",
      "GitHub Pages ready structure"
    ],
    tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    result:
      "Created a professional brand website that can act as both a company presence and a live example of RSG TECH's website development capabilities."
  },
  {
    id: "powerapps-inventory",
    title: "PowerApps Inventory Request System",
    category: "automation",
    short:
      "A PowerApps and SharePoint system for browsing inventory, adding items to a cart, and submitting requests.",
    tags: ["PowerApps", "SharePoint", "Microsoft 365"],
    overview:
      "This system is a low-code inventory request application designed to help users browse available items, select quantities, manage a cart, and submit structured order requests.",
    problem:
      "Manual inventory requests can become difficult to manage when item names, quantities, customer details, and order information are spread across messages or spreadsheets.",
    solution:
      "The application uses PowerApps as the front-end interface and SharePoint lists as the backend for inventory, orders, and order items. Users can add items to a cart, enter request details, and submit records into a structured system.",
    features: [
      "Inventory browsing",
      "Add-to-cart workflow",
      "Quantity tracking",
      "Customer information form",
      "SharePoint order records",
      "Order item tracking",
      "Clean submission process"
    ],
    tools: ["PowerApps", "SharePoint", "Power Automate", "Microsoft 365"],
    result:
      "Created a cleaner inventory request workflow that organizes order details, reduces manual tracking, and makes requests easier to manage."
  },
  {
    id: "ku-warehouse",
    title: "KU Warehouse Inventory / Order System",
    category: "software",
    short:
      "A custom inventory and order workflow concept for tracking items, requests, and order details.",
    tags: ["Inventory", "Orders", "Workflow"],
    overview:
      "This project focuses on organizing warehouse inventory and order requests through a structured digital workflow. It supports item tracking, request organization, and cleaner order management.",
    problem:
      "Warehouse and inventory workflows can become messy when stock information, request details, and order records are not stored in a consistent structure.",
    solution:
      "The system organizes inventory items, customer/request information, selected products, and order details into a more controlled workflow that is easier to track and review.",
    features: [
      "Inventory item display",
      "Cart-based item selection",
      "Order request structure",
      "Customer information capture",
      "Order item records",
      "Basic workflow organization"
    ],
    tools: ["PowerApps", "SharePoint", "Microsoft 365", "Workflow Design"],
    result:
      "Improved the structure of inventory request handling by separating inventory data, order records, and selected order items."
  },
  {
    id: "ai-project-evaluator",
    title: "AI Project Evaluation System",
    category: "software",
    short:
      "A group evaluation platform for managing teams, tasks, comments, and project performance insights.",
    tags: ["React", "Django", "Dashboard"],
    overview:
      "The AI Project Evaluation System is a full-stack platform designed to support group project management, task tracking, contribution review, and instructor/team visibility.",
    problem:
      "Group projects can be difficult to evaluate fairly when task ownership, effort, communication, and progress are not clearly tracked.",
    solution:
      "The platform provides pages for dashboards, groups, tasks, profiles, comments, and evaluation-related data, helping teams and instructors understand project activity more clearly.",
    features: [
      "Dashboard views",
      "Group management",
      "Task tracking",
      "Profile sections",
      "Role-based behavior",
      "Task comments",
      "Performance and discrepancy views"
    ],
    tools: ["React", "Tailwind CSS", "Django", "SQLite", "REST APIs"],
    result:
      "Built a structured full-stack application that supports team visibility, project organization, and evaluation workflows."
  },
  {
    id: "data-analyzer",
    title: "Data Analyzer Dashboard",
    category: "software",
    short:
      "A dashboard for inspecting datasets, missing values, duplicates, data types, and quality issues.",
    tags: ["Dashboard", "Data Quality", "React"],
    overview:
      "The Data Analyzer Dashboard helps users review datasets before deeper analysis by showing important quality information in a clean interface.",
    problem:
      "Raw datasets often contain missing values, duplicates, incorrect data types, and quality issues that are easy to miss without a clear inspection tool.",
    solution:
      "The dashboard gives users visual and structured access to dataset previews, missing value checks, duplicate detection, data type inspection, and profile information.",
    features: [
      "Dataset preview",
      "Missing value checks",
      "Duplicate detection",
      "Column type review",
      "Data profile summary",
      "History panel concept",
      "Clean dashboard layout"
    ],
    tools: ["React", "TypeScript", "API Integration", "Data Profiling"],
    result:
      "Created a practical dashboard concept for helping users understand data quality before analysis or reporting."
  },
  {
    id: "skillmatch",
    title: "SkillMatch Job Finder",
    category: "software",
    short:
      "A job search tool concept for collecting listings and organizing saved or hidden opportunities.",
    tags: ["Web App", "Jobs", "Data"],
    overview:
      "SkillMatch Job Finder is a web application concept focused on collecting job listings and helping users organize opportunities based on relevance.",
    problem:
      "Job searching can become scattered when listings come from multiple sources and users need to track saved, hidden, or interesting roles manually.",
    solution:
      "The system gathers job data, displays listings clearly, and allows users to save or hide opportunities for a cleaner job search workflow.",
    features: [
      "Job listing display",
      "Saved jobs",
      "Hidden jobs",
      "Search workflow",
      "User-focused organization",
      "Simple web interface"
    ],
    tools: ["Flask", "JavaScript", "HTML", "CSS", "Data Handling"],
    result:
      "Created a job search organization tool that makes it easier to manage listings and focus on relevant opportunities."
  }
];

const categoryTitles = {
  all: "All Projects",
  website: "Website Development",
  software: "Custom Software Tools",
  automation: "Automation"
};

const categoryDescriptions = {
  all: "Browse selected websites, software tools, dashboards, and automation projects.",
  website: "Projects focused on websites, brand presence, landing pages, and responsive design.",
  software: "Projects focused on dashboards, inventory systems, admin portals, and internal tools.",
  automation: "Projects focused on PowerApps, SharePoint, Microsoft 365, and workflow automation."
};

const projectList = document.getElementById("projectList");
const projectDetails = document.getElementById("projectDetails");
const categoryButtons = document.querySelectorAll(".category-btn");
const projectCategoryTitle = document.getElementById("projectCategoryTitle");
const projectCategoryDescription = document.getElementById("projectCategoryDescription");

let activeCategory = "all";
let activeProjectId = null;

function getFilteredProjects() {
  if (activeCategory === "all") {
    return projects;
  }

  return projects.filter((project) => project.category === activeCategory);
}

function renderProjectList() {
  if (!projectList) return;

  const filteredProjects = getFilteredProjects();

  projectList.innerHTML = filteredProjects
    .map((project) => {
      const tags = project.tags.map((tag) => `<span>${tag}</span>`).join("");

      return `
        <button class="project-option ${activeProjectId === project.id ? "active" : ""}" data-project-id="${project.id}">
          <h3>${project.title}</h3>
          <p>${project.short}</p>
          <div class="tags">${tags}</div>
        </button>
      `;
    })
    .join("");

  const projectButtons = document.querySelectorAll(".project-option");

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectId = button.dataset.projectId;
      renderProjectList();
      renderProjectDetails();
    });
  });
}

function renderProjectDetails() {
  if (!projectDetails) return;

  const project = projects.find((item) => item.id === activeProjectId);

  if (!project) {
    projectDetails.innerHTML = `
      <div class="empty-details">
        <h3>Select a project</h3>
        <p>Project details will appear here after you choose a project from the list above.</p>
      </div>
    `;
    return;
  }

  const features = project.features.map((feature) => `<li>${feature}</li>`).join("");
  const tools = project.tools.map((tool) => `<span>${tool}</span>`).join("");

  projectDetails.innerHTML = `
    <div class="detail-content">
      <h3>${project.title}</h3>
      <p>${project.overview}</p>

      <div class="detail-grid">
        <div class="detail-block">
          <h4>Problem</h4>
          <p>${project.problem}</p>
        </div>

        <div class="detail-block">
          <h4>Solution</h4>
          <p>${project.solution}</p>
        </div>

        <div class="detail-block">
          <h4>Key Features</h4>
          <ul>${features}</ul>
        </div>

        <div class="detail-block">
          <h4>Tools Used</h4>
          <div class="tags">${tools}</div>
        </div>

        <div class="detail-block">
          <h4>Result</h4>
          <p>${project.result}</p>
        </div>
      </div>
    </div>
  `;
}

function updateCategoryHeader() {
  if (!projectCategoryTitle || !projectCategoryDescription) return;

  projectCategoryTitle.textContent = categoryTitles[activeCategory];
  projectCategoryDescription.textContent = categoryDescriptions[activeCategory];
}

if (categoryButtons.length > 0) {
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      activeCategory = button.dataset.category;
      activeProjectId = null;

      updateCategoryHeader();
      renderProjectList();
      renderProjectDetails();
    });
  });

  updateCategoryHeader();
  renderProjectList();
  renderProjectDetails();
}
