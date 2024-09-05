import Head from "next/head";

const AboutPage = ({ websites }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="En Yüksek RTP Slot Siteler | Bet Sitelerinin En Güncel RTP Oranları"
        />
        <meta
          name="keywords"
          content="en yüksek rtp slot sitesi, rtp en yüksek siteler, rtp ne demek, güncel rtp oranları, rtp nedir, rtp, yüksek rtp oranları, en iyi rtp slot oyunları, rtp en yüksek oyunlar, rtp yüksek bet siteleri, rtp yüksek slotlar, casino rtp, casino oyun rtp, canlı rtp, canlı rtp veritabanı, oyunlarda rtp, yüksek rtpli oyunlar, rtp yüksek oyunlar, rtp si en yüksek oyunlar, en çok kazandıran oyunlar, en iyi rtp oyunlar"
        />
        <title>
          Casino oyunlarının en güncel RTP oranları | En Yüksek RTP Slot Siteler
          | En Yüksek RTP Oyunlar | Güncel RTP Oranları | RTP Yüksek Oyunlar
        </title>
      </Head>
      <section className="lg:w-3/4 mx-auto my-12 px-4 lg:px-0">
        <section>
          <h1 className="font-black text-center text-blue-800 text-xl">
            EN YÜKSEK RTP SİTELER HAKKINDA
          </h1>
          <br />
          <p className="text-justify">
            En Yüksek RTP Siteler platformu olarak, oyuncuların daha kazançlı ve
            adil bir oyun deneyimi yaşamalarını sağlamak amacıyla en güvenilir
            ve en yüksek RTP oranlarına sahip casino sitelerini sizler için
            derliyoruz. Ekibimiz, casino dünyasında uzun yıllara dayanan
            deneyime sahip profesyonellerden oluşmakta olup, sektördeki en
            güncel ve doğru bilgileri sizlere sunmayı amaçlamaktadır.
            Misyonumuz, oyuncuların oyun oynarken kazançlarını en üst seviyeye
            çıkarabilmeleri için doğru rehberlik sağlamak ve güvenilir
            platformlarda oyun oynamalarını kolaylaştırmaktır. Güvenilir,
            tarafsız ve şeffaf incelemelerimizle sizlere en iyi hizmeti
            sunmaktan mutluluk duyuyoruz.
          </p>
          <br />
          <p className="text-justify">
            En Yüksek RTP Siteler web sitesi olarak, oyuncuların en yüksek geri
            ödeme oranlarına sahip oyunları ve casino platformlarını
            keşfetmelerine yardımcı olmayı hedefliyoruz. Sitemizde, en iyi
            casino oyun sağlayıcılarından, yüksek RTP sunan oyun seçeneklerine
            kadar geniş bir rehber bulabilirsiniz. Amacımız, oyuncuların en
            güvenilir ve kazançlı platformlara yönlendirilmesini sağlayarak,
            oyun deneyimlerini daha keyifli hale getirmektir. Ekibimiz, güncel
            trendleri takip ederek, sizlere en doğru bilgiyi sunmaya ve oyun
            stratejilerinizi geliştirmenize yardımcı olacak içerikler üretmeye
            odaklanmıştır.
          </p>
          <br />
          <p className="text-justify">
            En Yüksek RTP Siteler platformu, çevrimiçi casino dünyasında
            güvenilir bilgi kaynağı olmayı amaçlayan bir rehber sitesidir.
            Oyunculara, en iyi geri ödeme oranlarına sahip siteleri ve oyunları
            bulmalarında yardımcı oluyor, casino seçimlerinde bilinçli kararlar
            vermelerini sağlıyoruz. Tarafsız incelemelerimiz ve uzman
            yorumlarımızla, hem yeni başlayanlara hem de deneyimli oyunculara en
            güncel ve kazançlı oyun fırsatlarını sunuyoruz. Oyuncu güvenliğini
            ön planda tutarak, lisanslı ve denetlenen siteleri öneriyor, her
            zaman şeffaf ve adil bir oyun deneyimi için rehberlik ediyoruz.
          </p>
        </section>
        <br />
        <br />
        <section>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4 border-b border-gray-200 text-left">
                  Site Adı
                </th>
                <th className="p-4 border-b border-gray-200 text-left">
                  RTP Puanı
                </th>
              </tr>
            </thead>
            <tbody>
              {websites.map((website, index) => (
                <tr
                  key={website._id}
                  className={`bg-white ${index % 2 == 0 && "bg-gray-100"}`}
                >
                  <td className="p-4 border-b border-r border-gray-200">
                    {website.website_name}
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    <span
                      className={`${
                        website.website_rtp >= 95 && "text-green-500"
                      }`}
                    >
                      %{website.website_rtp}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <br />
        <br />
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/websites`);
  const data = await response.json();

  const { websites } = data.data;

  return {
    props: {
      websites,
    },
  };
}

export default AboutPage;
