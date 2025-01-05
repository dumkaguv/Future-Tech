export default function getInitialAllTabsData() {
  return `
    <div class="posts" data-js-posts>
          <ul class="posts__list">
            <li class="post__item" data-js-post>
              <article class="post">
                <div class="post__item--wrapper container">
                  <div class="post__item-person">
                    <img
                      src="./assets/images/team/2.png"
                      alt=""
                      class="post__image"
                      width="80"
                      height="80"
                      loading="lazy"
                    />
                    <div class="post__person-info">
                      <h4 class="post__person-name h6">John Techson</h4>
                      <p
                        class="post__person-position"
                        data-js-post-category="Quantum Computing"
                      >
                        Quantum Computing
                      </p>
                    </div>
                    <div class="post__item-view visible-tablet">
                      <a
                        class="post__item-button button icon icon--arrow-top-right-yellow"
                        href="./blogs.html"
                      >
                        View Blog
                      </a>
                    </div>
                  </div>
                  <div class="post__item-info">
                    <time class="post__info-date" datetime="2023-10-15"
                      >October 15, 2023</time
                    >
                    <h5 class="post__info-title h4">
                      The Quantum Leap in Computing
                    </h5>
                    <p class="post__info-description">
                      Explore the revolution in quantum computing, its
                      applications, and its potential impact on various
                      industries.
                    </p>
                    <div class="post__info-actions">
                      <ul class="post__actions-list">
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Like"
                            data-js-post-like-button
                          >
                            <svg
                              class="post__actions-icon is-active"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              data-js-post-like-icon
                            >
                              <path
                                d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">24.5k</span>
                          </button>
                        </li>
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Comment"
                          >
                            <svg
                              class="post__actions-icon"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M8.48581 19.6888C9.54657 20.2083 10.7392 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 14.1401 4.49356 15.665 5.34026 16.9341M8.48581 19.6888L4 20.5L5.34026 16.9341M8.48581 19.6888L8.49231 19.6877M5.34026 16.9341L5.34154 16.9308"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">50</span>
                          </button>
                        </li>
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Share"
                          >
                            <svg
                              class="post__actions-icon"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M10.0384 14.4616L4.1719 11.7951C3.36454 11.4281 3.39898 10.2697 4.22673 9.95134L18.8999 4.30781C19.7087 3.99675 20.5033 4.79139 20.1922 5.60013L14.5487 20.2733C14.2303 21.1011 13.072 21.1355 12.705 20.3281L10.0384 14.4616ZM10.0384 14.4616L14.4231 10.077"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">20</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post__item-view hidden-tablet">
                    <a
                      class="post__item-button button icon icon--arrow-top-right-yellow"
                      href="./blogs.html"
                    >
                      View Blog
                    </a>
                  </div>
                </div>
              </article>
            </li>
            <li class="post__item" data-js-post>
              <article class="post">
                <div class="post__item--wrapper container">
                  <div class="post__item-person">
                    <img
                      src="./assets/images/team/3.png"
                      alt=""
                      class="post__image"
                      width="80"
                      height="80"
                      loading="lazy"
                    />
                    <div class="post__person-info">
                      <h4 class="post__person-name h6">Sarah Ethicist</h4>
                      <p
                        class="post__person-position"
                        data-js-post-category="AI Ethics"
                      >
                        AI Ethics
                      </p>
                    </div>
                    <div class="post__item-view visible-tablet">
                      <a
                        class="post__item-button button icon icon--arrow-top-right-yellow"
                        href="./blogs.html"
                      >
                        View Blog
                      </a>
                    </div>
                  </div>
                  <div class="post__item-info">
                    <time class="post__info-date" datetime="2023-11-15"
                      >November 5, 2023</time
                    >
                    <h5 class="post__info-title h4">
                      The Ethical Dilemmas of AI
                    </h5>
                    <p class="post__info-description">
                      A deep dive into ethical challenges posed by AI,
                      including bias, privacy, and transparency.
                    </p>
                    <div class="post__info-actions">
                      <ul class="post__actions-list">
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Like"
                            data-js-post-like-button
                          >
                            <svg
                              class="post__actions-icon"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              data-js-post-like-icon
                            >
                              <path
                                d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">32k</span>
                          </button>
                        </li>
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Comment"
                          >
                            <svg
                              class="post__actions-icon"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M8.48581 19.6888C9.54657 20.2083 10.7392 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 14.1401 4.49356 15.665 5.34026 16.9341M8.48581 19.6888L4 20.5L5.34026 16.9341M8.48581 19.6888L8.49231 19.6877M5.34026 16.9341L5.34154 16.9308"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">72</span>
                          </button>
                        </li>
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Share"
                          >
                            <svg
                              class="post__actions-icon"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M10.0384 14.4616L4.1719 11.7951C3.36454 11.4281 3.39898 10.2697 4.22673 9.95134L18.8999 4.30781C19.7087 3.99675 20.5033 4.79139 20.1922 5.60013L14.5487 20.2733C14.2303 21.1011 13.072 21.1355 12.705 20.3281L10.0384 14.4616ZM10.0384 14.4616L14.4231 10.077"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">18</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post__item-view hidden-tablet">
                    <a
                      class="post__item-button button icon icon--arrow-top-right-yellow"
                      href="./blogs.html"
                    >
                      View Blog
                    </a>
                  </div>
                </div>
              </article>
            </li>
            <li class="post__item" data-js-post>
              <article class="post">
                <div class="post__item--wrapper container">
                  <div class="post__item-person">
                    <img
                      src="./assets/images/team/4.png"
                      alt=""
                      class="post__image"
                      width="80"
                      height="80"
                      loading="lazy"
                    />
                    <div class="post__person-info">
                      <h4 class="post__person-name h6">Astronomer X</h4>
                      <p
                        class="post__person-position"
                        data-js-post-category="Space Exploration"
                      >
                        Space Exploration
                      </p>
                    </div>
                    <div class="post__item-view visible-tablet">
                      <a
                        class="post__item-button button icon icon--arrow-top-right-yellow"
                        href="./blogs.html"
                      >
                        View Blog
                      </a>
                    </div>
                  </div>
                  <div class="post__item-info">
                    <time class="post__info-date" datetime="2023-12-15"
                      >December 10, 2023</time
                    >
                    <h5 class="post__info-title h4">
                      The Mars Colonization Challenge
                    </h5>
                    <p class="post__info-description">
                      Exploring the technical and logistical challenges of
                      human colonization on Mars.
                    </p>
                    <div class="post__info-actions">
                      <ul class="post__actions-list">
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Like"
                            data-js-post-like-button
                          >
                            <svg
                              class="post__actions-icon"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              data-js-post-like-icon
                            >
                              <path
                                d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">20k</span>
                          </button>
                        </li>
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Comment"
                          >
                            <svg
                              class="post__actions-icon"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M8.48581 19.6888C9.54657 20.2083 10.7392 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 14.1401 4.49356 15.665 5.34026 16.9341M8.48581 19.6888L4 20.5L5.34026 16.9341M8.48581 19.6888L8.49231 19.6877M5.34026 16.9341L5.34154 16.9308"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">31</span>
                          </button>
                        </li>
                        <li class="post__actions-item">
                          <button
                            class="post__actions-button button"
                            type="button"
                            aria-label="Share"
                          >
                            <svg
                              class="post__actions-icon"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M10.0384 14.4616L4.1719 11.7951C3.36454 11.4281 3.39898 10.2697 4.22673 9.95134L18.8999 4.30781C19.7087 3.99675 20.5033 4.79139 20.1922 5.60013L14.5487 20.2733C14.2303 21.1011 13.072 21.1355 12.705 20.3281L10.0384 14.4616ZM10.0384 14.4616L14.4231 10.077"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class="post__actions-count">12</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post__item-view hidden-tablet">
                    <a
                      class="post__item-button button icon icon--arrow-top-right-yellow"
                      href="./blogs.html"
                    >
                      View Blog
                    </a>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
  `
}