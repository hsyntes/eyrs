import connectMongoDb from "@/database";
import Website from "@/lib/models/Website";

export default async function handler(req, res) {
  try {
    await connectMongoDb();

    const websites = await Website.aggregate([
      {
        $sort: {
          website_rtp: -1,
        },
      },
    ]);

    for (const website of websites) {
      if (new Date() - new Date(website.updatedAt) > 1 * 60 * 1000) {
        if (
          website.website_name === "Maximumbahis" ||
          website.website_name === "Teslabahis"
        ) {
          website.website_rtp = parseFloat(
            (Math.random() * (99 - 97) + 97).toFixed(2)
          );
        } else {
          website.website_rtp = parseFloat(
            (Math.random() * (96 - 90) + 90).toFixed(2)
          );
        }

        await Website.findByIdAndUpdate(website._id, {
          website_rtp: website.website_rtp,
        });
      }
    }

    websites.sort((a, b) => b.website_rtp - a.website_rtp);

    res.status(200).json({
      status: "success",
      results: websites.length,
      data: { websites },
    });
  } catch (e) {
    console.error(`Something went wrong: ${e}`);
    res.status(500).json({
      status: "error",
      message: `Something went wrong: ${e}`,
    });
  }
}
