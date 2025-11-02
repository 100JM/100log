import Image from "next/image";
import Link from "next/link";

import profileImg from "../public/images/bjm_profile.jpg";
import gmailSvg from "../public/images/gmail-color.svg";

const Contact: React.FC = () => {
    return (
        <div className="my-14 w-full">
            <div className="flex flex-col justify-center items-center mb-2">
                <Link href="/about">
                    <Image src={profileImg} alt="profile_img" width={100} height={100} className="rounded-full" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                </Link>
                <span className="owner-name text-sm text-center pt-5">백종민<br /><i className="ri-calendar-2-line"></i>1993<br /><i className="ri-map-pin-line"></i>Seoul<br />커리어 발전을 위한 새로운 기회를 찾고있습니다.</span>
            </div>
            <div className="flex justify-center items-center">
                <a href="https://github.com/100JM" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <svg className="w-6 h-6 mx-2 dark:fill-[#2d8dec]" fill="#181717" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                </a>
                <a href="mailto:bjm.931026@gmail.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Image src={gmailSvg} alt='Contact via GitHub' className="mx-2" width={24} height={24} />
                </a>
                <a href="tel:010-4441-9535" rel="noopener noreferrer" className="cursor-pointer">
                    <svg className="w-6 h-6 mx-2 dark:fill-[#f7f9fb]" fill="#181717" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>Phone</title>
                        <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Contact;