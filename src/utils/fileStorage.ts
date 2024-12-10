import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/orders.json");

export function readOrdersFromFile(): Record<string, any> {
  try {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      // Ensure the directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      // Create an empty JSON file
      fs.writeFileSync(filePath, JSON.stringify({}, null, 2), "utf-8");
    }

    // Read and parse the file
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data || "{}");
  } catch (error) {
    console.error("Error reading orders file:", error);
    return {};
  }
}

export function writeOrdersToFile(orders: Record<string, any>): void {
  try {
    // Ensure the directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the file (creates it if it doesn't exist)
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing orders file:", error);
  }
}
