import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = ({}) => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  const { pathname } = router;

  useEffect(() => {
    const body = document.querySelector("body");

    if (menu) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    return () => (document.body.style.overflow = "auto");
  }, [menu]);

  return (
    <>
      <nav className="sticky top-0 bg-white shadow text-dark p-4">
        <div className="flex items-center justify-between lg:w-3/4 mx-auto">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={183}
              height={64}
              className="w-24"
              alt="Logo"
            />
          </Link>
          <ul className="hidden lg:flex items-center justify-center gap-3">
            <li>
              <Link
                href={"/"}
                className={`${
                  pathname === "/" && "font-bold text-blue-800"
                } hover:text-blue-800 transition-all`}
              >
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                href={"/hakkimizda"}
                className={`${
                  pathname === "/hakkimizda" && "font-bold text-blue-800"
                } hover:text-blue-800 transition-all`}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href={"/sikca-sorulan-sorular"}
                className={`${
                  pathname === "/sikca-sorulan-sorular" &&
                  "font-bold text-blue-800"
                } hover:text-blue-800 transition-all`}
              >
                Sıkça Sorulan Sorular
              </Link>
            </li>
            <li>
              <Link
                href={"https://rtpsorgu.com"}
                target="_blank"
                className={`text-orange-500 font-bold hover:text-orange-800 transition-all`}
              >
                RTP Sorgulama
              </Link>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            className="block lg:hidden text-primary"
            onClick={() => setMenu(true)}
          />
        </div>
      </nav>
      {menu && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50 p-6">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={1957}
                height={398}
                className="w-28"
                alt="Logo"
              />
            </Link>
            <FontAwesomeIcon
              icon={faTimes}
              size="xl"
              className="text-primary"
              onClick={() => setMenu(false)}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <h1 className="font-bold text-2xl text-center">
              RTP Yüksek Siteler
            </h1>
            <br />
            <ul className="text-center text-xl space-y-4">
              <li>
                <Link
                  href={"/"}
                  className={`${
                    pathname === "/" && "font-bold text-blue-800"
                  } hover:text-blue-800 transition-all`}
                  onClick={() => setMenu(false)}
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href={"/hakkimizda"}
                  className={`${
                    pathname === "/hakkimizda" && "font-bold text-blue-800"
                  } hover:text-blue-800 transition-all`}
                  onClick={() => setMenu(false)}
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href={"/sikca-sorulan-sorular"}
                  className={`${
                    pathname === "/sikca-sorulan-sorular" &&
                    "font-bold text-blue-800"
                  } hover:text-blue-800 transition-all`}
                  onClick={() => setMenu(false)}
                >
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link
                  href={"https://rtpsorgu.com"}
                  target="_blank"
                  className={`text-orange-500 font-bold hover:text-orange-800 transition-all`}
                  onClick={() => setMenu(false)}
                >
                  RTP Sorgulama
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
