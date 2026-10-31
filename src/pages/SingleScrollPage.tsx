import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState, type PointerEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'

import crowdPhoto from '../assets/PIC_Crowd 3.png'
import networkingPhoto from '../assets/PIC_Networking 2.png'
import valuePhoto from '../assets/images/ValueWe.png'
import qnaPhoto from '../assets/PIC_QnA.png'
import image1Photo from '../assets/image1.jpeg'
import newContactPhoto from '../assets/images/new-contact.jpeg'

import strategyIcon from '../assets/icons/strategy.svg'
import platformIcon from '../assets/icons/platform.svg'
import deliveryIcon from '../assets/icons/delivery.svg'

import ContactForm from '../components/ContactForm'

export default function SingleScrollPage() {
  const prefersReducedMotion = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    if (!id) return

    const el = document.getElementById(id)
    if (!el) return

    const t = window.setTimeout(() => {
      el.scrollIntoView({ block: 'start', behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }, 50)

    return () => window.clearTimeout(t)
  }, [location.hash, prefersReducedMotion])

  const reveal = prefersReducedMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.6, ease: 'easeOut' as const },
      }

  const handleFocusPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    const px = ((event.clientX - rect.left) / rect.width) * 100
    const py = ((event.clientY - rect.top) / rect.height) * 100

    el.style.setProperty('--mx', `${Math.max(0, Math.min(100, px)).toFixed(2)}%`)
    el.style.setProperty('--my', `${Math.max(0, Math.min(100, py)).toFixed(2)}%`)
    el.style.setProperty('--glow', '1')
  }

  const handleFocusPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--glow', '0')
  }

  const formats = useMemo(
    () => [
      {
        key: 'conf',
        title: 'Thematic Conferences',
        meta: 'Day-long Agenda | Stage Sessions | Breakout Talks',
        desc: 'Elite lineup of speakers and screened delegation, supported by a large audience pool to gather industry sentiment.',
        icon: strategyIcon,
        idealFor: ['Solution Presentations', 'Fireside Chats', 'Brand Visibility'],
      },
      {
        key: 'rt',
        title: 'Bespoke Roundtables',
        meta: 'Exclusivity Commitment | Invite-Only | Discussion Prompts',
        desc: 'High Quality Dialogue with Decision-Makers, with ample attention and extensive conversations with each participant.',
        icon: platformIcon,
        idealFor: ['Account Based Marketing', 'Report Curation', 'Interpersonal Bonding'],
      },
      {
        key: 'content',
        title: 'Branded Content',
        meta: 'Articles | Interviews | Tagged Posts',
        desc: 'Structured storytelling that evokes thought—paired with subliminal inclusion which feels natural.',
        icon: deliveryIcon,
        idealFor: ['Trust Building', 'Propelling Narratives', 'Digital Reach'],
      },
    ],
    [],
  )

  const [activeKey, setActiveKey] = useState<(typeof formats)[number]['key']>(formats[0].key)
  const active = formats.find((f) => f.key === activeKey) ?? formats[0]

  const bfsiSignals = useMemo(
    () => [
      'Digital Transformation',
      'Risk & Compliance',
      'Customer Experience',
      'Innovation & Fintech',
      'Data & Analytics',
    ],
    [],
  )

  return (
    <>
      <section id="home" className="pageHero">
        <div className="container heroInner">
          <motion.div {...reveal} className="heroCopy">
            <p className="eyebrow">BFSI leaders • conferences • roundtables</p>
            <h1>
              Trusted forums where leaders
              <span className="accent"> connect</span> and
              <span className="accent"> collaborate</span>.
            </h1>
            <p className="subhead">
              BFSI Bulletin convenes decision-makers in formats built for quality dialogue—conferences,
              bespoke roundtables, and high-clarity branded content.
            </p>
            <div className="ctaRow">
              <a className="btnPrimary" href="#contact">
                Talk to us
              </a>
            </div>
          </motion.div>

          <motion.div
            className="heroMedia"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img className="heroImg" src={crowdPhoto} alt="BFSI Bulletin event moments" />
            <div className="mediaCaption">Trusted forums. Real conversations. Clear momentum.</div>
          </motion.div>
        </div>
      </section>

      <section className="band bandBlue" aria-label="Partners">
        <div className="container">
          <div className="bandHeader">
            <div>
              <h2 className="bandTitle">Built for BFSI Leaders</h2>
              <p>
                Practical convenings and content designed to help BFSI organizations align stakeholders, drive innovation, and prove value.
              </p>
            </div>
          </div>

          <div className="logoRow" aria-label="BFSI focus areas">
            {bfsiSignals.map((label) => (
              <div key={label} className="logoTile">
                <span className="logoTileText">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section sectionTight">
        <div className="container">
          <div className="split splitMedia aboutSplit">
            <motion.div {...reveal} style={{ paddingRight: '2rem', maxWidth: '600px' }}>
              <div className="sectionHeader" style={{ marginBottom: 18 }}>
                <h2>About BFSI Bulletin</h2>
                <p>
                  BFSI Bulletin is a platform for Leaders of Banking, Financial Services, and Insurance to engage, reflect, and chart the way forward.
                </p>
                <p style={{ marginTop: 12 }}>
                  Our initiatives aim to convene decision-makers in distinct formats like Thematic Conferences, Curated Roundtables, and Easy-going Evenings to foster meaningful discussions.
                </p>
              </div>

              <p className="subhead" style={{ marginTop: 18 }}>
                With BFSI and Service Entities being at Crossroads for Enterprise Transformation, we bridge crucial discussion gaps by creating trusted spaces where perspectives converge and collaborations materialise.
              </p>
            </motion.div>

            <motion.div {...reveal} className="panel mediaPanel">
              <div className="heroPhotoGrid" aria-label="BFSI Bulletin moments">
                <img className="heroPhoto heroPhotoMain" src={image1Photo} alt="Panel discussion" loading="lazy" />
                <img className="heroPhoto heroPhotoSide" src={networkingPhoto} alt="Networking" loading="lazy" />
                <img className="heroPhoto heroPhotoSide" src={qnaPhoto} alt="Q&A session" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bandBlue">
        <div className="container">
          <motion.div {...reveal} className="sectionHeader bandBlueHeader" style={{ textAlign: 'center' }}>
            <h2>Focus Horizons</h2>
            <p>
              We facilitate meaningful dialogues around these broad themes that are pillars for Success of any BFSI transformation
            </p>
          </motion.div>

          <div className="focusBoxGrid" aria-label="Focus horizons" style={{ justifyContent: 'center' }}>
            {['Innovation & Growth', 'Digital Banking', 'Regulatory Excellence', 'Customer Trust'].map((label) => (
              <div
                key={label}
                className="focusBox"
                onPointerMove={handleFocusPointerMove}
                onPointerLeave={handleFocusPointerLeave}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="competence" className="section sectionAlt">
        <div className="container">
          <motion.div {...reveal} className="sectionHeader">
            <h2>Our Competence</h2>
          </motion.div>

          <div className="formatTabs" role="tablist" aria-label="Formats">
            {formats.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`formatTab ${activeKey === f.key ? 'active' : ''}`}
                role="tab"
                aria-selected={activeKey === f.key}
                onClick={() => setActiveKey(f.key)}
              >
                <span className="formatTabIcon" aria-hidden="true">
                  <img src={f.icon} alt="" />
                </span>
                <span className="formatTabText">{f.title}</span>
              </button>
            ))}
          </div>

          <div className="formatPanel" aria-label="Format details">
            <motion.div
              key={active.key}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="formatPanelInner"
            >
              <div className="formatMain">
                <div className="formatMainHead">
                  <div className="formatMainIcon" aria-hidden="true">
                    <img src={active.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="formatTitle">{active.title}</h3>
                  </div>
                </div>

                <div className="formatPills" aria-label="Format highlights">
                  {active.meta.split('|').map((part) => (
                    <span key={part.trim()} className="formatPill">
                      {part.trim()}
                    </span>
                  ))}
                </div>

                <p className="formatDesc" style={{ marginTop: 12 }}>
                  {active.desc}
                </p>
              </div>

              <aside className="formatAside" aria-label="Ideal for">
                <div className="formatAsideTitle">Ideal for</div>
                <ul className="formatAsideList formatAsideLadder">
                  {active.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="value" className="section">
        <div className="container">
          <motion.div {...reveal} className="sectionHeader">
            <h2>Value we +</h2>
            <p>Partners synergise with us for Deriving New Connections & Nurturing Prospects to unlock Revenue Potential</p>
            <div className="pillRow" aria-label="Value themes">
              {['Credibility', 'Buzz', 'Pipeline'].map((p) => (
                <span key={p} className="pill">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="valueSurface">
            <div className="valueLayout">
              <div className="valueCards" aria-label="Value pillars">
                {[
                  {
                    title: 'Brand Amplification',
                    desc: 'Visibility and Positioning through our digital channels',
                  },
                  {
                    title: 'Demand Generation',
                    desc: 'Engage with multiple prospects under one roof',
                  },
                  {
                    title: 'Thought Leadership',
                    desc: 'Voice Perspectives and Navigate Sessions with Industry Peers',
                  },
                  {
                    title: 'Market Intel',
                    desc: 'Discover Opportunities, Practices and Scale Blueprints of Target Accounts',
                  },
                ].map((c, idx) => (
                  <motion.article
                    key={c.title}
                    className="valueCard"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.03 }}
                  >
                    <div className="valueCardTop">
                      <div className="valueBadge" aria-hidden="true">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="valueCardTitle">{c.title}</h3>
                        <p className="valueCardDesc">{c.desc}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.aside {...reveal} className="valueAside" aria-label="What you get">
                <img
                  className="valueAsideImage"
                  src={valuePhoto}
                  alt="BFSI Bulletin networking"
                  loading="lazy"
                />

                <div className="valueCta">
                  <div className="valueCtaTitle">Ready to build?</div>
                  <div className="valueCtaText">
                    Tell us your objective—credibility, buzz, or pipeline.
                  </div>
                  <div className="valueCtaActions">
                    <a className="btnPrimary" href="#contact">
                      Talk to us
                    </a>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contactHero homeContact"
        style={{ ['--contactBg' as string]: `url(${newContactPhoto})` }}
      >
        <div className="contactHeroOverlay" aria-hidden="true" />
        <div className="container contactHeroInner">
          <motion.div {...reveal} className="contactHeroCopy">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.82)' }}>
              CONTACT
            </p>
            <h2 className="contactHeroTitle">
              Connect with BFSI Bulletin
              <span className="contactHeroAccent"> today</span>
            </h2>
            <p className="contactHeroSub">
              Tell us what you're trying to achieve—conferences, roundtables, or branded content. We'll
              respond with next steps.
            </p>

            <div className="contactHeroMeta">
              <div className="contactLine">
                <span className="contactIcon" aria-hidden="true">
                  ⏱
                </span>
                <span>Typical response: 1–2 business days</span>
              </div>
              <div className="contactLine">
                <span className="contactIcon" aria-hidden="true">
                  ✦
                </span>
                <span>Next step: a short call and a clear plan</span>
              </div>
            </div>
          </motion.div>

          <ContactForm className="form formElevated" source="bfsi-bulletin-single-scroll" />
        </div>
      </section>

      <div style={{ display: 'none' }}>
        <Link to="/">Home</Link>
      </div>
    </>
  )
}
