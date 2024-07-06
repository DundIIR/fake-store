import './_footer.scss'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer-container">
				<svg
					className="footer__logo"
					width="193"
					height="45"
					viewBox="0 0 189 26"
					fill="#FFC500"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M6.64 25.3889H0.16V0.188914H20.14V5.22892H6.64V11.1689H17.26V16.2089H6.64V25.3889ZM28.0586 20.7089C29.3306 20.7089 30.7706 20.4689 32.3786 19.9889V17.8289H27.1586C26.7986 17.8289 26.4986 17.9489 26.2586 18.1889C26.0186 18.4289 25.8986 18.7289 25.8986 19.0889V19.4489C25.8986 19.8089 26.0186 20.1089 26.2586 20.3489C26.4986 20.5889 26.7986 20.7089 27.1586 20.7089H28.0586ZM21.3986 6.66891C25.7906 6.18892 29.7506 5.94892 33.2786 5.94892C34.9106 5.94892 36.2186 6.44092 37.2026 7.42492C38.1866 8.40892 38.6786 9.71692 38.6786 11.3489V25.3889H33.0986L32.7386 23.5889C31.6106 24.3329 30.4466 24.8849 29.2466 25.2449C28.0706 25.5809 27.0746 25.7489 26.2586 25.7489H24.9986C23.3666 25.7489 22.0586 25.2569 21.0746 24.2729C20.0906 23.2889 19.5986 21.9809 19.5986 20.3489V18.7289C19.5986 17.0969 20.0906 15.7889 21.0746 14.8049C22.0586 13.8209 23.3666 13.3289 24.9986 13.3289H32.3786V11.8889C32.3786 11.5289 32.2586 11.2289 32.0186 10.9889C31.7786 10.7489 31.4786 10.6289 31.1186 10.6289C29.5586 10.6289 27.8306 10.7009 25.9346 10.8449C24.0626 10.9889 22.5506 11.0969 21.3986 11.1689V6.66891ZM47.8487 17.8289V25.3889H41.5487V0.188914H47.8487V12.9689H50.7287L54.6887 6.30891H61.3487L55.9487 15.4889L61.3487 25.3889H54.6887L50.5487 17.8289H47.8487ZM69.8031 10.4489C68.8431 10.4489 68.3631 10.9289 68.3631 11.8889V13.8689H74.4831V11.8889C74.4831 10.9289 74.0031 10.4489 73.0431 10.4489H69.8031ZM80.0631 25.0289C75.4311 25.5089 71.2311 25.7489 67.4631 25.7489C65.8311 25.7489 64.5231 25.2569 63.5391 24.2729C62.5551 23.2889 62.0631 21.9809 62.0631 20.3489V11.7089C62.0631 9.90892 62.5671 8.50492 63.5751 7.49692C64.6071 6.46492 66.0231 5.94892 67.8231 5.94892H75.0231C76.8231 5.94892 78.2271 6.46492 79.2351 7.49692C80.2671 8.50492 80.7831 9.90892 80.7831 11.7089V18.3689H68.3631V19.8089C68.3631 20.1689 68.4831 20.4689 68.7231 20.7089C68.9631 20.9489 69.2631 21.0689 69.6231 21.0689C71.9991 21.0689 75.4791 20.8889 80.0631 20.5289V25.0289ZM93.686 20.1689C100.262 20.5289 104.714 20.7089 107.042 20.7089C107.594 20.7089 108.026 20.5529 108.338 20.2409C108.674 19.9049 108.842 19.4609 108.842 18.9089V15.6689H100.562C98.042 15.6689 96.206 15.1049 95.054 13.9769C93.926 12.8249 93.362 10.9889 93.362 8.46891V7.38892C93.362 4.86892 93.926 3.04492 95.054 1.91692C96.206 0.764915 98.042 0.188914 100.562 0.188914H113.198V5.22892H102.002C100.562 5.22892 99.842 5.94892 99.842 7.38892V8.10892C99.842 9.54892 100.562 10.2689 102.002 10.2689H108.482C110.834 10.2689 112.562 10.8209 113.666 11.9249C114.77 13.0289 115.322 14.7569 115.322 17.1089V18.9089C115.322 21.2609 114.77 22.9889 113.666 24.0929C112.562 25.1969 110.834 25.7489 108.482 25.7489C107.258 25.7489 105.962 25.7249 104.594 25.6769L101.282 25.5329C98.834 25.4129 96.302 25.2449 93.686 25.0289V20.1689ZM131.159 25.3889C128.831 25.6289 126.551 25.7489 124.319 25.7489C122.687 25.7489 121.379 25.2569 120.395 24.2729C119.411 23.2889 118.919 21.9809 118.919 20.3489V11.1689H116.759V6.30891H118.919L119.639 1.98891H125.219V6.30891H129.719V11.1689H125.219V19.4489C125.219 19.8089 125.339 20.1089 125.579 20.3489C125.819 20.5889 126.119 20.7089 126.479 20.7089H131.159V25.3889ZM152.072 19.9889C152.072 21.7889 151.556 23.2049 150.524 24.2369C149.516 25.2449 148.112 25.7489 146.312 25.7489H138.032C136.232 25.7489 134.816 25.2449 133.784 24.2369C132.776 23.2049 132.272 21.7889 132.272 19.9889V11.7089C132.272 9.90892 132.776 8.50492 133.784 7.49692C134.816 6.46492 136.232 5.94892 138.032 5.94892H146.312C148.112 5.94892 149.516 6.46492 150.524 7.49692C151.556 8.50492 152.072 9.90892 152.072 11.7089V19.9889ZM145.772 12.2489C145.772 11.2889 145.292 10.8089 144.332 10.8089H140.012C139.052 10.8089 138.572 11.2889 138.572 12.2489V19.4489C138.572 20.4089 139.052 20.8889 140.012 20.8889H144.332C145.292 20.8889 145.772 20.4089 145.772 19.4489V12.2489ZM165.927 11.5289C164.415 11.5289 162.855 11.8889 161.247 12.6089V25.3889H154.947V6.30891H160.527L160.887 8.64891C162.951 6.84892 165.111 5.94892 167.367 5.94892H168.987V11.5289H165.927ZM177.823 10.4489C176.863 10.4489 176.383 10.9289 176.383 11.8889V13.8689H182.503V11.8889C182.503 10.9289 182.023 10.4489 181.063 10.4489H177.823ZM188.083 25.0289C183.451 25.5089 179.251 25.7489 175.483 25.7489C173.851 25.7489 172.543 25.2569 171.559 24.2729C170.575 23.2889 170.083 21.9809 170.083 20.3489V11.7089C170.083 9.90892 170.587 8.50492 171.595 7.49692C172.627 6.46492 174.043 5.94892 175.843 5.94892H183.043C184.843 5.94892 186.247 6.46492 187.255 7.49692C188.287 8.50492 188.803 9.90892 188.803 11.7089V18.3689H176.383V19.8089C176.383 20.1689 176.503 20.4689 176.743 20.7089C176.983 20.9489 177.283 21.0689 177.643 21.0689C180.019 21.0689 183.499 20.8889 188.083 20.5289V25.0289Z" />
				</svg>

				<nav className="footer__nav">
					<a href="#" className="footer__link">
						ДОСТАВКА
					</a>
					<a href="#" className="footer__link">
						ГАРАНТИЯ
					</a>
					<a href="#" className="footer__link">
						КОНТАКТЫ
					</a>
				</nav>

				<div className="footer__social">
					<a href="#" className="footer__social-link">
						<svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6.5 3.5H9V0.5H5.6C2.8 0.5 2 2.2 2 4.7V6.5H0V9.5H2V18.5H5V9.5H8.3L8.9 6.5H5V5C5 4.2 5.3 3.5 6.5 3.5Z"
								fill="#444444"
							/>
						</svg>
					</a>
					<a href="#" className="footer__social-link">
						<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8 10.5C9.10457 10.5 10 9.60457 10 8.5C10 7.39543 9.10457 6.5 8 6.5C6.89543 6.5 6 7.39543 6 8.5C6 9.60457 6.89543 10.5 8 10.5Z"
								fill="#444444"
							/>
							<path
								d="M14.7 1.8C13.8 0.9 12.7 0.5 11.3 0.5H4.7C1.9 0.5 0 2.4 0 5.2V11.8C0 13.2 0.4 14.4 1.4 15.2C2.3 16.1 3.4 16.5 4.7 16.5H11.3C12.7 16.5 13.9 16.1 14.7 15.2C15.5 14.3 16 13.2 16 11.8V5.2C16 3.8 15.6 2.6 14.7 1.8ZM8 12.6C5.8 12.6 3.9 10.8 3.9 8.5C3.9 6.2 5.8 4.4 8 4.4C10.2 4.4 12.1 6.2 12.1 8.5C12.1 10.8 10.2 12.6 8 12.6ZM12.6 5.2C11.9 5.2 11.3 4.7 11.3 3.9C11.3 3.1 11.8 2.6 12.6 2.6C13.3 2.6 13.9 3.2 13.9 3.9C13.9 4.6 13.3 5.2 12.6 5.2Z"
								fill="#444444"
							/>
						</svg>
					</a>
					<a href="#" className="footer__social-link">
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.7 0.655143C11.2 0.155143 12.3 0.955143 12.9 1.75514C13.4 1.55514 14 1.35514 14.6 1.15514C14.6 1.95514 14.1 2.55514 13.8 2.75514C14.5 2.95514 15 2.35514 15 2.35514C14.9 3.25514 14.1 4.05514 13.6 4.25514C13.4 10.5551 10.8 14.6551 4.7 14.5551C4.2 14.5551 4.8 14.5551 4.3 14.5551C4 14.5551 0.6 14.1551 0 12.7551C2 12.9551 3.4 12.3551 4.1 11.6551C3.3 11.3551 1.7 11.2551 1.5 8.85514C1.8 9.05514 2 9.15514 2.6 9.05514C1.5 8.25514 0.3 7.55514 0.4 5.55514C0.7 5.85514 1.3 6.05514 1.6 5.95514C1 5.75514 -0.2 2.85514 0.8 1.35514C2.4 3.05514 4.1 4.75514 7.1 4.85514C7.3 2.75514 8.1 1.35514 9.7 0.655143Z"
								fill="#444444"
							/>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
