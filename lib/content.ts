import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostsByCategory(category: string) {
  const postsDirectory = path.join(process.cwd(), "content", category);

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    };
  });
}