export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "619d2372bf10193456196f1d",
                  title: "Sanity Studio",
                  name: "kaleidoscopeblog-studio",
                  apiId: "257c9977-04d0-4c59-a508-762628c62f35",
                },
                {
                  buildHookId: "619d237219ff03460da3649c",
                  title: "Blog Website",
                  name: "kaleidoscopeblog",
                  apiId: "dda13fa0-6eba-408e-b3c3-9693a0a56afc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/djR3FL3KT/kaleidoscopeblog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://kaleidoscopeblog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
