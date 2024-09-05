import connectMongoDb from "@/database";
import Website from "@/lib/models/Website";

export default async function handler(req, res) {
  console.log(`req.method: ${req.method}`);

  if (req.method === "POST") {
    try {
      await connectMongoDb();

      const { name, rtp } = req.body;

      if (!name || !rtp)
        return res.status(403).json({
          status: "fail",
          message: "Site adı ve rtp oranı gereklidir.",
        });

      const website = await Website.create({
        website_name: name,
        website_rtp: rtp,
      });

      res.status(201).json({
        status: "success",
        message: "Website is created successfully!",
        data: {
          website,
        },
      });
    } catch (e) {
      console.error(`Something went wrong: ${e}`);
      res.status(500).json({
        status: "error",
        message: `Something went wrong: ${e}`,
      });
    }
  }
}
