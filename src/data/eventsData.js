/* =====================================================================
   APRATIM 2026 — EVENTS DATA  (content only, no presentation)

   Status values used on detail rows:
     'confirmed'   – default, shown without a badge
     'tentative'   – e.g. "Tentative Participants"
     'unannounced' – "To be announced"
     'conflict'    – sources disagree; shown as-is, never resolved

   Block types inside a section:
     p      { text }
     ul/ol  { items: [string | { text, sub: [string] }] }
     table  { head: [..], rows: [[..]] }
     kv     { rows: [{ k, v, s? }] }          (detail / information tables)
     note   { text }
     events { ids: [tabId], notes?: {tabId: text} }  (links to event tabs)

   Deliberately NOT included: Venue / Stage fields, registration forms,
   registration links, Drama.
   ===================================================================== */

// ---- tiny builders (keep the data below readable) --------------------
const p = (text) => ({ t: 'p', text });
const note = (text) => ({ t: 'note', text });
const ul = (...items) => ({ t: 'ul', items });
const ol = (...items) => ({ t: 'ol', items });
const table = (head, ...rows) => ({ t: 'table', head, rows });
const kv = (...rows) => ({ t: 'kv', rows });
const events = (ids, notes) => ({ t: 'events', ids, notes });
const row = (k, v, s) => (s ? { k, v, s } : { k, v });
const sec = (heading, ...blocks) => ({ heading, blocks });
const sub = (text, ...subs) => ({ text, sub: subs });

const COMMON_AWARD_NOTE = '1st, 2nd and 3rd position medals and/or trophies.';

export const eventsData = [
  /* ---------------------------------------------------------------- 01 */
  {
    id: 'college-events',
    order: 1,
    name: 'College Events',
    hover: {
      keywords: 'Dance • Energy • Celebration',
      blurb:
        'Experience the excitement of college competitions, dance performances, and entertainment.',
      cta: 'Explore Events →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: 'College Organising Committee • Apratim ’26',
        title: 'College Events',
        tagline: 'Where Energy Meets Expression.',
        sections: [
          sec(
            'About College Events',
            p(
              'College Events brings together students from different institutions to celebrate talent, creativity, and performance. From energetic dance performances to spontaneous musical challenges, these competitions provide a platform to showcase confidence, coordination, and stage presence.'
            )
          ),
          sec(
            'Featured Events',
            table(
              ['Event', 'Format'],
              ['Step Up Group Dance', 'Group Dance Competition'],
              ['Step Up Duet Dance', 'Duet Dance Competition'],
              ['Prop Hustle', 'Individual Prop-based Dance'],
              ['Catch the Hook', 'Individual Dance Competition']
            ),
            events(['step-up-group', 'step-up-duet', 'prop-hustle', 'catch-the-hook'])
          ),
          sec(
            'Participation',
            ul(
              'Open to students from all colleges and institutions.',
              'Participants must follow the individual event rules and instructions.',
              'Valid College/University ID cards must be carried wherever required.',
              'Participants must report before their scheduled event.',
              'The organising committee’s instructions must be followed throughout the competitions.'
            )
          ),
          sec(
            'Awards & Recognition',
            ul(
              '1st, 2nd and 3rd position medals/trophies.',
              'Judge mementos.',
              'Winner and participation certificates.',
              'Exciting cash prizes for Step Up Group Dance winners.'
            )
          ),
        ],
      },
      {
        id: 'step-up-group',
        label: 'Step Up Group Dance',
        kicker: 'Group Dance Competition',
        title: 'Step Up Group Dance',
        tagline: 'Move Together. Perform Together. Own the Stage.',
        sections: [
          sec(
            'About the Event',
            p(
              'Step Up Group Dance is a group choreography competition that celebrates coordination, creativity, synchronization, and stage presence. Teams can showcase their talent through different dance styles and energetic group performances.'
            )
          ),
          sec(
            'Eligibility & Participation',
            ul(
              'Open to students from all colleges and institutions.',
              'Each team must consist of a minimum of 12 and a maximum of 25 members.',
              'Every team must nominate a team leader during registration.',
              'The team leader will serve as the single point of contact for the organising committee.'
            )
          ),
          sec(
            'Performance Guidelines',
            ul(
              'Performance duration: 5–12 minutes.',
              'Exceeding the time limit will result in negative marking.',
              'Teams must arrange their own props and costumes.',
              'All dance forms are allowed.',
              'Semi-folk and semi-classical performances are permitted.',
              'Purely folk dance performances are not allowed.'
            )
          ),
          sec(
            'Music & Technical Requirements',
            ol(
              'Teams must submit their music track on a pen drive at least two hours before the event.',
              'Only one track is permitted per team; medleys are allowed.',
              'The music file must be clearly named using the team’s name.',
              'Stage setup and clearance time must not exceed five minutes before and after the performance.'
            )
          ),
          sec(
            'Conduct & Discipline',
            ol(
              'Teams must report at least 30 minutes before the competition begins.',
              'Performance order will be decided through a draw of lots conducted on the spot.',
              'Damage to stage property, misbehaviour, or indiscipline will lead to immediate disqualification.',
              'The organising committee will not be responsible for the loss of props, costumes, or personal belongings.',
              'The judges’ decision will be final and binding.'
            )
          ),
          sec('Awards & Recognition', p('Exciting cash prizes await the winning teams!')),
        ],
      },
      {
        id: 'step-up-duet',
        label: 'Step Up Duet Dance',
        kicker: 'Duet Dance Competition',
        title: 'Step Up Duet Dance',
        tagline: 'Two Performers. One Rhythm. Endless Energy.',
        sections: [
          sec(
            'About the Event',
            p(
              'Step Up Duet Dance is a two-person dance competition where participants showcase their coordination, creativity, chemistry, and performance skills. Teams can explore different dance styles and express their individuality through synchronized performances.'
            )
          ),
          sec(
            'Eligibility & Participation',
            ul(
              'Open to students from all colleges and institutions.',
              'Each team must consist of exactly 2 members.',
              'Every participant must carry a valid College/University ID card for verification on the event day.',
              'Teams must register within the deadline announced by the organising committee.'
            )
          ),
          sec(
            'Performance Guidelines',
            ul(
              'Performance duration: 2–5 minutes.',
              'Exceeding the time limit will result in negative marking.',
              sub(
                'Any dance style is permitted, including:',
                'Bollywood',
                'Contemporary',
                'Classical',
                'Hip-Hop',
                'Salsa',
                'Fusion'
              ),
              'Props are allowed but must be arranged by the participating team.'
            )
          ),
          sec(
            'Music & Technical Requirements',
            ol(
              'Teams must submit their track in MP3 format on a pen drive at least two hours before the competition.',
              'Only one track per performance is allowed; medleys are permitted.',
              'Stage setup and clearance time must not exceed two minutes before and after the performance.'
            )
          ),
          sec(
            'Conduct & Discipline',
            ol(
              'Teams must report at least 30 minutes before the event begins.',
              'Performance order will be decided through a draw of lots.',
              'Misbehaviour, delay, or property damage will lead to disqualification.',
              'The organising committee will not be responsible for the safety of props, costumes, or valuables.',
              'The judges’ decision will be final and binding.'
            )
          ),
        ],
      },
      {
        id: 'prop-hustle',
        label: 'Prop Hustle',
        kicker: 'Individual Prop-Based Dance',
        title: 'Prop Hustle',
        tagline: 'One Prop. Endless Possibilities.',
        sections: [
          sec(
            'About the Event',
            p(
              'Prop Hustle is an individual dance competition that challenges participants to transform an everyday object into the highlight of their performance. Through creativity, imagination, and expressive choreography, participants must use an organiser-allotted prop as a central element of their act.'
            )
          ),
          sec(
            'Eligibility & Participation',
            ul(
              'Open to students from all colleges and institutions.',
              'Individual participation only.',
              'Each entry must consist of one participant.',
              'Every participant must carry a valid College/University ID card for verification.',
              'Registration must be completed within the announced deadline.'
            )
          ),
          sec(
            'Prop Allotment',
            ol(
              'Props will be selected and provided by the organisers.',
              'Each participant will receive a prop through a random draw conducted on the spot.',
              sub(
                'Example props include:',
                'Umbrella',
                'Chair',
                'Dupatta',
                'Bottle',
                'Stick',
                'Hat',
                'Newspaper',
                'Bag'
              ),
              'Participants must creatively use the allotted prop as a central element of their performance.',
              'Exchange or refusal of props is not permitted.'
            )
          ),
          sec(
            'Performance Guidelines',
            ul(
              'Performance duration: 1.5–3 minutes.',
              'Participants may choose their own song and any style or genre.',
              'The allotted prop must remain clearly visible and be actively used during the performance.',
              'Vulgar, obscene, or offensive choreography and costumes will result in disqualification.'
            )
          ),
          sec(
            'Conduct & Discipline',
            ol(
              'Participants must report at least 30 minutes before the event begins.',
              'The organising committee will not be responsible for the loss of personal belongings.',
              'The judges’ decision will be final and binding.'
            )
          ),
        ],
      },
      {
        id: 'catch-the-hook',
        label: 'Catch the Hook',
        kicker: 'Individual Dance Competition',
        title: 'Catch the Hook',
        tagline: 'Hear the Beat. Catch the Move. Own the Moment.',
        sections: [
          sec(
            'About the Event',
            p(
              'Catch the Hook is an exciting multi-round dance competition that tests participants’ adaptability, musical awareness, and ability to perform iconic hook steps. Participants must respond to randomly played songs and recreate their signature hook steps with accuracy and creativity.'
            )
          ),
          sec(
            'Eligibility & Participation',
            ul(
              'Open to students from all colleges and institutions.',
              'Individual participation only.',
              'Each participant enters as a solo performer.',
              'Registration must be completed before the announced deadline.'
            )
          ),
          sec(
            'Competition Format',
            ol(
              'The competition will be conducted in multiple rounds.',
              'A random song will be played during each round.',
              'Participants must perform the song’s hook step as accurately and creatively as possible.',
              'Different rounds may feature different songs and genres.',
              'Participants must adapt quickly to the music.',
              'Personal style is allowed, but the core hook step must remain recognizable.',
              'At the end of each round, participants will be eliminated based on judges’ scores.',
              'Only the top-performing participants will advance to the next round.'
            )
          ),
          sec(
            'Performance Guidelines',
            ul(
              'Time limit per hook step: 30–45 seconds.',
              'No props are allowed unless explicitly announced by the organisers.',
              'Participants must remain within the stage boundaries throughout their performance.'
            )
          ),
          sec(
            'Conduct & Discipline',
            ol(
              'Participants must report at least 30 minutes before the event begins.',
              'Misbehaviour, misuse of music, or damage to property will result in disqualification.',
              'Organisers will not be responsible for the loss of personal belongings.',
              'Judges’ decisions will be final and binding.'
            )
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 02 */
  {
    id: 'mr-miss-apratim',
    order: 2,
    name: 'Mr. & Miss Apratim',
    club: 'Symphony Club',
    hover: {
      keywords: 'Confidence • Talent • Personality',
      blurb:
        'Step into the spotlight and showcase your individuality, talent, confidence, and stage presence.',
      cta: 'Discover the Rounds →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: 'Symphony Club • Apratim ’26',
        title: 'Mr. & Miss Apratim',
        sections: [
          sec(
            'About Symphony',
            p(
              'Symphony is the Fashion Club of the college, celebrating style, creativity, confidence, and self-expression. It provides a platform for students to showcase their individuality, explore fashion, and develop their stage presence through fashion-oriented activities and events.'
            ),
            p('At Apratim ’26, Symphony presents Mr. & Miss Apratim, a four-round personality competition.')
          ),
          sec(
            'About the Event',
            p(
              'Mr. & Miss Apratim 2026 is a personality competition designed to recognize individuals who demonstrate confidence, creativity, talent, communication skills and an impressive stage presence. Through four distinct rounds.'
            )
          ),
          sec(
            'Event Information',
            kv(
              row('Event name', 'Mr. & Miss Apratim 2026'),
              row('Organising club', 'Symphony Club'),
              row('Event dates', '18–19 November 2026'),
              row('Eligibility', 'Students from all colleges'),
              row('Competition format', 'Individual contestants'),
              row('Number of rounds', 'Four'),
              row('Contestant count', 'To be announced', 'unannounced')
            )
          ),
          sec('The Rounds', events(['round-1', 'round-2', 'round-3', 'round-4'])),
          sec(
            'Common Rules and Regulations',
            ol(
              'Contestants must report at the designated time communicated by the organising committee.',
              'Attendance in all four competition rounds and scheduled rehearsals is mandatory.',
              'Contestants must maintain punctuality, discipline and professional behaviour throughout the competition.',
              'All instructions given by the organising committee, judges and backstage team must be followed.',
              'Contestants must demonstrate respect towards fellow participants, organisers and judges.',
              'Any form of misbehaviour, disruption or disrespectful conduct will not be tolerated.',
              'Contestants must inform the organising committee in advance if they are unable to attend a scheduled rehearsal.',
              'No contestant should leave the event area without informing the organisers.',
              'Late arrival or absence without prior approval may result in penalties or disqualification.',
              'Repeated indiscipline, failure to follow instructions, harassment, offensive language or deliberate disruption may lead to disqualification.',
              'Attempting to unfairly influence the judges or competition results is strictly prohibited.',
              'The organising committee reserves the right to modify the event schedule or competition format when necessary.',
              'The decisions of the judges regarding scores, rankings and winners will be final and binding.'
            )
          ),
        ],
      },
      {
        id: 'round-1',
        label: 'Round 1 — Introduction',
        kicker: 'Round 01',
        title: 'Introduction',
        sections: [
          sec(
            'About the Round',
            p(
              'The Introduction Round gives contestants the opportunity to present themselves confidently and create a strong first impression. Participants are expected to introduce their personality, interests and individuality through an engaging and original presentation.'
            )
          ),
          sec(
            'What Contestants Need to Do',
            ol(
              'Introduce themselves confidently before the judges and audience.',
              sub(
                'Include relevant details such as:',
                'Name',
                'Academic branch',
                'Interests and hobbies',
                'Personality traits',
                'Other interesting personal details'
              ),
              'Present their introduction creatively and expressively.',
              'Maintain confidence and establish good communication with the audience.',
              'Complete the introduction within the time limit specified by the organisers.'
            )
          ),
          sec(
            'Rules and Regulations',
            ul(
              'Contestants must keep their introductions original and meaningful.',
              'Reading directly from a mobile phone or written script is discouraged.',
              'Participants should avoid unnecessarily lengthy introductions.',
              'Clear communication, confidence and appropriate expression should be maintained.',
              'Contestants must follow the time limit communicated by the organising committee.'
            )
          ),
          sec(
            'Judging Criteria',
            table(
              ['Criteria', 'What judges evaluate'],
              ['Confidence', 'Self-assurance and composure'],
              ['Originality', 'Creativity and uniqueness'],
              ['Communication', 'Clarity and speaking ability'],
              ['Personality', 'Individuality and overall impression']
            )
          ),
        ],
      },
      {
        id: 'round-2',
        label: 'Round 2 — Talent',
        kicker: 'Round 02',
        title: 'Talent',
        sections: [
          sec(
            'About the Round',
            p(
              'The Talent Round allows contestants to showcase their individual abilities and creativity. Participants can present a talent of their choice and demonstrate their skills through an engaging performance.'
            )
          ),
          sec(
            'What Contestants Need to Do',
            ol(
              'Select a talent suitable for a college-level competition.',
              'Prepare a presentation that highlights their skills and creativity.',
              'Arrange their own props, costumes, instruments or other required materials.',
              'Submit background music and communicate technical requirements to the organisers in advance.',
              'Complete their performance within the specified time limit.'
            )
          ),
          sec(
            'Rules and Regulations',
            ul(
              'Talent performances must be appropriate for a college-level event.',
              'Contestants are responsible for arranging their own performance materials and equipment.',
              'Background music and technical requirements must be submitted or communicated beforehand.',
              'Fire, dangerous objects and other unsafe materials are strictly prohibited.',
              'Plagiarism or misrepresentation of another person’s work may result in penalties.',
              'Participants must follow the time limits and instructions provided by the organisers.'
            )
          ),
          sec(
            'Judging Criteria',
            table(
              ['Criteria', 'What judges evaluate'],
              ['Skill', 'Ability and proficiency'],
              ['Creativity', 'Uniqueness of the performance'],
              ['Presentation', 'Overall execution and delivery'],
              ['Audience Engagement', 'Ability to connect with the audience']
            )
          ),
        ],
      },
      {
        id: 'round-3',
        label: 'Round 3 — Ramp Walk',
        kicker: 'Round 03',
        title: 'Ramp Walk',
        sections: [
          sec(
            'About the Round',
            p(
              'The Ramp Walk Round focuses on confidence, personality, style and stage presence. Contestants are expected to walk with grace, maintain a confident posture and present themselves with individuality.'
            )
          ),
          sec(
            'What Contestants Need to Do',
            ol(
              'Follow the ramp-walk sequence and instructions provided by the organisers.',
              'Arrange their own outfits, footwear and accessories unless otherwise communicated.',
              'Present themselves confidently and maintain appropriate posture and expressions.',
              'Demonstrate individuality through their overall appearance and stage presentation.',
              'Follow the approved sequence without interfering with other contestants.'
            )
          ),
          sec(
            'Rules and Regulations',
            ul(
              'Outfits must be appropriate for a college-level fashion competition.',
              'Contestants are responsible for arranging their own outfits, footwear and accessories.',
              'Props and special requirements must receive prior approval from the organisers.',
              'Participants must follow the designated sequence and stage instructions.',
              'Contestants must not obstruct or interfere with the performances of others.',
              'Appropriate conduct and sportsmanship must be maintained throughout the round.'
            )
          ),
          sec(
            'Judging Criteria',
            table(
              ['Criteria', 'What judges evaluate'],
              ['Posture', 'Body language and walking style'],
              ['Confidence', 'Self-assurance on stage'],
              ['Expressions', 'Facial expressions and presentation'],
              ['Styling', 'Overall appearance and outfit presentation'],
              ['Stage Presence', 'Impact and personality on stage']
            )
          ),
        ],
      },
      {
        id: 'round-4',
        label: 'Round 4 — Q&A',
        kicker: 'Round 04',
        title: 'Question & Answer (Q&A)',
        sections: [
          sec(
            'About the Round',
            p(
              'The Question & Answer Round evaluates contestants’ communication skills, confidence, intelligence and presence of mind. Participants must respond to questions from the judges with clarity, originality and composure.'
            )
          ),
          sec(
            'What Contestants Need to Do',
            ol(
              'Listen carefully to the questions asked by the judges.',
              'Respond confidently and respectfully.',
              'Present answers that are clear, relevant and well-articulated.',
              'Demonstrate originality and presence of mind while responding.',
              'Maintain composure and communicate their thoughts effectively.'
            )
          ),
          sec(
            'Rules and Regulations',
            ul(
              'Answers must remain appropriate and respectful.',
              'Contestants should avoid offensive, inappropriate or disrespectful responses.',
              'Participants should answer questions clearly and stay relevant to the topic.',
              'Confidence, clarity and originality should be maintained while responding.',
              'Judges’ evaluation and decisions will be final.'
            )
          ),
          sec(
            'Judging Criteria',
            table(
              ['Criteria', 'What judges evaluate'],
              ['Intelligence', 'Understanding and quality of responses'],
              ['Presence of Mind', 'Ability to think and respond spontaneously'],
              ['Clarity', 'Clear and relevant communication'],
              ['Confidence', 'Composure while answering'],
              ['Communication', 'Expression and articulation of ideas']
            )
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 03 */
  {
    id: 'artstrong',
    order: 3,
    name: 'Artstrong',
    hover: {
      keywords: 'Art • Creativity • Imagination',
      blurb:
        'Unleash your imagination through sketching, painting, creative challenges, and artistic expression.',
      cta: 'Explore Events →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: 'Apratim 2026',
        title: 'Artstrong',
        sections: [
          sec(
            'About Artstrong',
            p(
              'Artstrong is a creative platform that encourages students to explore their artistic abilities, imagination and innovative thinking. Through individual and team-based competitions, participants get the opportunity to express ideas, create original artwork, reuse materials creatively and collaborate with others.'
            )
          ),
          sec(
            'Events',
            events([
              'live-sketching',
              'canvas-painting',
              'best-out-of-waste',
              'blindfold-duo',
              'pictionary',
            ])
          ),
          sec(
            'Judging Criteria — Live Sketching Challenge',
            table(
              ['Criteria', 'Weightage'],
              ['Creativity and originality', '30%'],
              ['Observation and interpretation', '25%'],
              ['Composition and proportion', '20%'],
              ['Neatness and finishing', '15%'],
              ['Relevance to the theme', '10%'],
              ['Total', '100%']
            )
          ),
        ],
      },
      {
        id: 'live-sketching',
        label: 'Live Sketching Challenge',
        kicker: 'Artstrong',
        title: 'Live Sketching Challenge',
        tagline: 'Theme: Observe. Imagine. Illustrate.',
        sections: [
          sec(
            'About the Event',
            p(
              'The Live Sketching Challenge tests participants’ observation, imagination and drawing skills. Contestants must create an original sketch based on a theme or reference subject announced by the organisers at the beginning of the competition.'
            )
          ),
          sec(
            'Event Information',
            kv(
              row('Participation', 'Individual'),
              row('Time limit', '45 minutes'),
              row('Theme', 'Announced at the beginning'),
              row('Materials', 'As permitted by organisers'),
              row('Submission', 'Before the announced deadline')
            )
          ),
          sec(
            'Rules and Regulations',
            ol(
              'A theme or reference subject will be announced by the organisers at the beginning of the competition.',
              'Participants may bring materials permitted by the organisers.',
              'Sketches must be completed within the allotted time and venue.',
              'Tracing, pre-made sketches, printed outlines and assistance from other participants are strictly prohibited.',
              'Mobile phones and digital drawing applications cannot be used during the competition.',
              'Every artwork must be original and relevant to the announced theme.',
              'Completed entries must be submitted to the event coordinator before the deadline.',
              'Late submissions may be disqualified.'
            )
          ),
          sec(
            'Disqualification',
            ul(
              'Tracing or copying another contestant’s work.',
              'Receiving unauthorised assistance.'
            )
          ),
          sec(
            'Tie-breaker',
            p(
              'The participant demonstrating stronger originality and interpretation of the subject will receive the higher rank.'
            )
          ),
        ],
      },
      {
        id: 'canvas-painting',
        label: 'Canvas Painting Challenge',
        kicker: 'Artstrong',
        title: 'Canvas Painting Challenge',
        tagline: 'Theme: A Canvas of Imagination',
        sections: [
          sec(
            'About the Event',
            p(
              'The Canvas Painting Challenge gives participants an opportunity to express their creativity through colours, techniques and artistic compositions. Contestants must create an original painting based on a theme announced before the competition begins.'
            )
          ),
          sec(
            'Event Information',
            kv(
              row('Participation', 'Individual'),
              row('Time limit', '90 minutes'),
              row('Canvas', 'Provided or approved by organisers'),
              row('Materials', 'Permitted painting supplies'),
              row('Submission', 'Completed canvas with registration number')
            )
          ),
          sec(
            'Rules and Regulations',
            ol(
              'Participants must create one original painting on the canvas provided or approved by the organisers.',
              'The theme will be announced before the competition begins.',
              'Permitted materials may include acrylic paints, watercolours, brushes and palettes, as specified by the organisers.',
              'Participants must bring their own materials unless otherwise announced.',
              'Pre-painted canvases, copied artwork, stencils containing complete designs and prepared outlines are not permitted.',
              'Digital references cannot be used during the competition unless explicitly permitted by the organisers.',
              'Participants must keep their workstations clean and avoid damaging the venue.',
              'Each participant must submit the completed canvas with their registration number before time expires.'
            )
          ),
          sec(
            'Disqualification',
            ul(
              'Submission of previously completed artwork.',
              'Deliberately copying another contestant’s painting.'
            )
          ),
          sec(
            'Tie-breaker',
            p(
              'The painting with the stronger combination of originality, composition and theme interpretation will be preferred.'
            )
          ),
        ],
      },
      {
        id: 'best-out-of-waste',
        label: 'Best Out of Waste',
        kicker: 'Artstrong',
        title: 'Best Out of Waste',
        tagline: 'Theme: Waste Today, Wonder Tomorrow',
        sections: [
          sec(
            'About the Event',
            p(
              'Best Out of Waste challenges participants to transform discarded materials into useful, decorative or innovative creations. The competition promotes environmental awareness, resourcefulness and sustainable creativity through the effective reuse of waste materials.'
            )
          ),
          sec(
            'Event Information',
            kv(
              row('Participation', 'Individual or pair'),
              row('Team composition', 'As decided during registration'),
              row('Time limit', '90 minutes'),
              row('Materials', 'Clean waste materials and basic tools provided by organisers'),
              row('Minimum recycled content', '70%')
            )
          ),
          sec(
            'Rules and Regulations',
            ol(
              'Participants must create a useful, decorative or innovative object primarily from waste or discarded materials.',
              'Clean waste materials and basic tools will be provided by the organisers.',
              'At least 70% of the final creation must consist of reused or discarded materials.',
              'Ready-made decorative items cannot be used as the main component.',
              'Participants must assemble and finish their creations during the competition.',
              'Pre-assembled projects and ready-made models are not permitted.',
              'Hazardous waste, exposed sharp metal, flammable substances, toxic materials and materials that may cause injuries are strictly prohibited.',
              'Each participant or team must briefly explain their creation, including its purpose and the materials reused.',
              'Participants must clean their workstations after the event.'
            )
          ),
          sec(
            'Disqualification',
            ul(
              'Use of hazardous materials.',
              'Presentation of a pre-made model.',
              'Failure to meet the minimum recycled-material requirement.'
            )
          ),
          sec(
            'Tie-breaker',
            p(
              'The creation offering the greatest practical value through innovative reuse of waste will receive the higher rank.'
            )
          ),
        ],
      },
      {
        id: 'blindfold-duo',
        label: 'Blindfold Artist Duo',
        kicker: 'Artstrong',
        title: 'Blindfold Artist Duo',
        tagline: 'Theme: Trust Your Partner, Draw Your Imagination',
        sections: [
          sec(
            'About the Event',
            p(
              'Blindfold Artist Duo is a creative teamwork challenge that tests communication, trust and coordination between two participants. One participant draws while blindfolded, and the other guides them using verbal instructions to recreate a secret object, image or concept.'
            )
          ),
          sec(
            'Event Information',
            kv(
              row('Participation', 'Team-based'),
              row('Team size', '2 participants'),
              row('Roles', 'Blindfolded Artist and Art Director'),
              row('Time limit', '5 minutes per team'),
              row('Materials', 'Blindfold and drawing materials as provided')
            )
          ),
          sec(
            'Rules and Regulations',
            ol(
              sub(
                'Each team must have two participants:',
                'Blindfolded Artist: The participant responsible for drawing.',
                'Art Director: The participant responsible for guiding the artist.'
              ),
              'The Blindfolded Artist must wear the provided blindfold while drawing.',
              'The Art Director will receive a secret object, image or concept and guide their partner using verbal instructions only.',
              'The Art Director must not touch the artist, drawing hand, paper, pencil or other drawing tools.',
              'The Art Director cannot draw, demonstrate shapes using hand movements or physically position the artist’s hand.',
              'The Blindfolded Artist must not peek through or remove the blindfold until instructed by the coordinator.',
              'Participants must not disclose the secret prompt to other teams.',
              'Mobile phones, outside help and unauthorised communication are prohibited.',
              'The completed drawing must be submitted immediately after the time limit.',
              'Both partners must cooperate respectfully and follow the coordinator’s instructions.'
            )
          ),
          sec(
            'Disqualification',
            ul(
              'Peeking or removing the blindfold without permission.',
              'Providing physical assistance.',
              'Unauthorised drawing by the Art Director.',
              'Deliberately sharing the secret prompt.'
            )
          ),
          sec(
            'Tie-breaker',
            p(
              'The team achieving the clearest representation of the prompt through effective communication will receive the higher rank.'
            )
          ),
        ],
      },
      {
        id: 'pictionary',
        label: 'Pictionary Battle',
        kicker: 'Artstrong',
        title: 'Pictionary Battle',
        tagline: 'Theme: Draw It. Guess It. Win It.',
        sections: [
          sec(
            'About the Event',
            p(
              'Pictionary Battle is an interactive team competition that combines drawing, quick thinking and teamwork. Participants take turns illustrating secret words or phrases while their teammates attempt to guess the correct answers within a limited time.'
            )
          ),
          sec(
            'Event Information',
            kv(
              row('Participation', 'Team-based'),
              row('Team size', 'Announced by event coordinator', 'unannounced'),
              row('Number of rounds', 'Announced before competition', 'unannounced'),
              row('Time limit', '60 seconds per prompt'),
              row('Scoring', '10 points per correct answer'),
              row('Winner', 'Team with the highest cumulative score')
            )
          ),
          sec(
            'Rules and Regulations',
            ol(
              'Participants will be divided into teams by the event coordinator.',
              'Team sizes and the number of rounds will be announced before the competition.',
              'Teams will take turns drawing and guessing secret words or phrases.',
              'Only the designated drawer may see the secret prompt.',
              'Drawers may use sketches, symbols and illustrations but cannot write letters, numbers or words or provide verbal clues.',
              'Drawers cannot speak, mime answers or make sounds to reveal the prompt.',
              'Teammates may call out guesses until the time expires.',
              'A correct answer within the time limit earns 10 points.',
              'Incorrect or unanswered prompts earn zero points.',
              'The opposing team must remain silent during the active guessing round and must not interfere.',
              'Mobile phones, internet searches, dictionaries and outside assistance are prohibited.',
              'If a team violates a rule, the coordinator may cancel that round’s points.',
              'The team with the highest cumulative score at the end of all rounds will be declared the winner.'
            )
          ),
          sec(
            'Scoring System',
            table(
              ['Result', 'Points'],
              ['Correct guess within 60 seconds', '10'],
              ['Incorrect answer', '0'],
              ['Unanswered prompt', '0']
            ),
            p(
              'The event coordinator will maintain the official score sheet and verify scores at the end of each round.'
            )
          ),
          sec(
            'Disqualification',
            ul(
              'Giving deliberate verbal clues.',
              'Writing prohibited words, letters or numbers.',
              'Using mobile phones or outside assistance.',
              'Repeatedly interfering with another team.'
            )
          ),
          sec(
            'Tie-breaker',
            p(
              'Tied teams will receive one additional prompt each. The team guessing correctly in the shortest time wins. If the tie remains, further sudden-death rounds will be conducted.'
            )
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 */
  {
    id: 'esports-gaming',
    order: 4,
    name: 'Esports & Gaming',
    hover: {
      keywords: 'Strategy • Competition • Victory',
      blurb:
        'Enter the gaming arena, challenge your opponents, and prove your skills across exciting tournaments.',
      cta: 'Enter the Arena →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: 'Esports Club • Apratim 2026',
        title: 'Esports & Gaming',
        tagline: 'Compete. Strategize. Conquer.',
        sections: [
          sec(
            'Description',
            p(
              'Esports & Gaming brings together gaming enthusiasts for competitive multiplayer tournaments that test strategic thinking, quick decision-making, coordination, and gaming skills. Participants compete across multiple game titles in knockout-style tournament formats, with winners recognized separately for each featured game.'
            )
          ),
          sec('Events', events(['pocket-wars', 'console-showdown'])),
          sec(
            'Common Event Information',
            kv(
              row('Organising Club', 'Esports Club'),
              row('Fest', 'Apratim 2026'),
              row('Event Format', 'Individual / Team-based'),
              row('Event Duration', 'Across two days'),
              row('Game Categories', 'Fighting, Sports, Racing, Shooter'),
              row('Tournament Format', 'Knockout / Bracket-based'),
              row('Game Titles', '2–3 titles per event'),
              row('Participation', 'Open to individual and team-based participants')
            )
          ),
          sec(
            'Common Rules & Guidelines',
            ol(
              'Specific game titles, rules, and match durations will be announced before the tournament.',
              'Participants must follow fair-play and sportsmanship policies.',
              'Use of external peripherals is subject to prior approval.',
              'Matches will be evaluated based on match outcomes, score accumulation, and tournament bracket progression.',
              'Participants must follow the instructions of the event coordinators.',
              'Any disputes or tournament-related decisions will be resolved by the organisers.',
              'The organisers’ decision regarding match results and tournament progression will be final.'
            )
          ),
          sec(
            'Prize & Recognition',
            ul(
              'Separate prizes for each featured game title.',
              '1st, 2nd, and 3rd position trophies.',
              'Certificates for the winners.',
              'Winners will be determined separately for each game.'
            )
          ),
        ],
      },
      {
        id: 'pocket-wars',
        label: 'Pocket Wars',
        kicker: 'Esports & Gaming',
        title: 'Pocket Wars',
        tagline: 'Fast Matches. Smart Moves. Victory.',
        sections: [
          sec(
            'Description',
            p(
              'Pocket Wars is a fast-paced competitive multiplayer gaming event featuring 2–3 featured game titles. Participants compete in short-format matches across selected titles, progressing through bracket-based elimination rounds. Winners are awarded independently for each game title.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Participation', 'Individual / Team-based'),
              row('Game Titles', '2–3 featured titles'),
              row('Tournament Format', 'Knockout / Bracket elimination'),
              row('Event Day', 'Day 1 and Day 2'),
              row('Expected Participation', 'Approximately 60–80 participants', 'tentative')
            )
          ),
          sec(
            'Rules & Guidelines',
            ol(
              'Participants must compete in the game titles announced by the organisers.',
              'Each game will follow its specified rules and match duration.',
              'Matches will be conducted according to the tournament bracket.',
              'Participants must report at the time communicated by the organisers.',
              'Fair play and sportsmanship must be maintained throughout the tournament.',
              'Any use of unauthorised external peripherals requires prior approval.',
              'Match results and scores will determine progression to the next round.',
              'The organisers’ decision regarding match outcomes and tournament progression will be final.'
            )
          ),
          sec(
            'Prize & Recognition',
            ul(
              'Separate 1st, 2nd, and 3rd position trophies for each featured game.',
              'Winner certificates for the respective game titles.'
            )
          ),
        ],
      },
      {
        id: 'console-showdown',
        label: 'Console Showdown',
        kicker: 'Esports & Gaming',
        title: 'Console Showdown',
        tagline: 'Challenge Your Skills. Dominate the Console.',
        sections: [
          sec(
            'Description',
            p(
              'Console Showdown is a head-to-head flagship console gaming tournament comprising 2–3 distinct game titles. Designed as a high-stakes knockout bracket competition, the event brings together skilled players to compete through exciting multiplayer matches using the available console gaming setups.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Participation', 'Individual / Team-based'),
              row('Game Titles', '2–3 distinct titles'),
              row('Tournament Format', 'Knockout / Bracket-based'),
              row('Event Day', 'Day 1 and Day 2'),
              row('Expected Participation', 'Approximately 80–100 participants', 'tentative')
            )
          ),
          sec(
            'Rules & Guidelines',
            ol(
              'Participants must compete in the game titles selected by the organisers.',
              'Each game will have specific match rules and duration announced before the tournament.',
              'Matches will be conducted using the available console gaming setups.',
              'Participants must follow the tournament bracket and match sequence.',
              'Fair play and sportsmanship must be maintained.',
              'External peripherals may only be used with prior approval.',
              'Match outcomes and accumulated scores will determine tournament progression.',
              'Participants must follow the instructions of the event coordinators.',
              'The organisers’ decision regarding match results and tournament progression will be final.'
            )
          ),
          sec(
            'Prize & Recognition',
            ul(
              'Separate 1st, 2nd, and 3rd position trophies for each featured game.',
              'Winner certificates for the respective game titles.'
            )
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 05 */
  {
    id: 'aos',
    order: 5,
    name: 'AOS — Apostle of Speech',
    hover: {
      keywords: 'Debate • Expression • Reasoning',
      blurb:
        'Speak your mind, challenge perspectives, tell stories, and let your words make an impact.',
      cta: 'Find Your Voice →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: 'Apratim ’26',
        title: 'AOS — Apostle of Speech',
        tagline: 'Think. Express. Persuade. Investigate.',
        sections: [
          sec(
            'Description',
            p(
              'AOS brings together students who enjoy public speaking, debating, creative writing, storytelling, and analytical thinking. The category provides a platform to express ideas, challenge perspectives, communicate creatively, and demonstrate reasoning and investigative abilities.'
            )
          ),
          sec('Events', events(['lexicon-pd', 'huge-vaad-vivaad', 'open-mic', 'stories-love-ink', 'the-evidence'])),
          sec(
            'Event Schedule',
            table(
              ['Event', 'Date', 'Timing'],
              ['Lexicon PD', '18–19 November 2026', '10 AM onwards'],
              ['Huge Vaad Vivaad', '18 November 2026', '10 AM onwards'],
              ['Open Mic', '18 November 2026', '11:30 AM–1:30 PM'],
              ['Stories, Love and Ink', '19 November 2026', '10:30 AM–11:30 AM'],
              ['The Evidence', '18–19 November 2026', '12:30 PM onwards']
            )
          ),
        ],
      },
      {
        id: 'lexicon-pd',
        label: 'Lexicon PD',
        kicker: 'AOS — Apostle of Speech',
        title: 'Lexicon PD',
        tagline: 'Where Arguments Meet Articulation.',
        sections: [
          sec(
            'Description',
            p(
              'Lexicon PD is an inter-college parliamentary debating competition based on the Asian Parliamentary format. Teams compete through structured debates, presenting arguments, challenging opposing viewpoints, and demonstrating critical thinking, rebuttal, and persuasive communication.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Eligibility', 'College students with valid IDs'),
              row('Team Size', 'Exactly 3 debaters'),
              row('Registration', 'Free'),
              row('Debate Format', 'Asian Parliamentary (3v3)'),
              row('Preliminary Rounds', '3 rounds on Day 1'),
              row('Elimination Rounds', 'Semifinals and Grand Finals on Day 2'),
              row('Date', '18–19 November 2026'),
              row('Timing', '10 AM onwards')
            )
          ),
          sec(
            'Competition Structure',
            ol(
              'Three preliminary rounds will be conducted on Day 1.',
              'Preliminary rounds will follow a power-pairing system based on team performance and speaker scores.',
              'Sides will be allocated through the tab system.',
              'Elimination-round sides will be decided by coin toss or seeding privileges.',
              'Motions will be announced 30 minutes before each round.',
              'Each team must provide an accredited adjudicator as per the N=N requirement.'
            )
          ),
          sec(
            'Speaking Rules',
            ul(
              'Substantive speeches: 7 minutes.',
              'Grace period: Up to 7 minutes 30 seconds.',
              'Reply speeches: 4 minutes.',
              'Points of Information (POIs): Maximum 15 seconds.',
              'POIs are permitted between the first and sixth minutes.',
              'Each debater must accept at least one POI and may accept up to two.',
              'No POIs are allowed during reply speeches.',
              'Preliminary rounds may use single chairs or panels.',
              'Elimination rounds will use three-judge panels.',
              'Oral feedback will be provided after preliminary debates.'
            )
          ),
          sec(
            'Preparation Rules',
            ol(
              'Motions are announced 30 minutes before each round.',
              'Only printed notes are permitted during preparation.',
              'Electronic devices, AI tools, and external coaching are prohibited.',
              'Teams must prepare independently within the allotted preparation time.'
            )
          ),
          sec(
            'General Rules',
            ol(
              'Teams must report 15 minutes before their scheduled round.',
              'Arrivals exceeding 10 minutes may result in a walkover.',
              'Harassment, plagiarism, unparliamentary conduct, and unauthorized assistance may result in disqualification.',
              'All participants must follow the instructions of the adjudication panel.',
              'All adjudication decisions are final and binding.'
            )
          ),
          sec(
            'Evaluation Criteria',
            table(
              ['Criteria', 'Marks'],
              ['Content & Analysis', '40'],
              ['Rebuttal & Engagement', '30'],
              ['Delivery & Style', '20'],
              ['Strategy & Time Management', '10'],
              ['Total', '100']
            )
          ),
        ],
      },
      {
        id: 'huge-vaad-vivaad',
        label: 'Huge Vaad Vivaad',
        kicker: 'AOS — Apostle of Speech',
        title: 'Huge Vaad Vivaad',
        tagline: 'Speak with Conviction. Debate with Purpose.',
        sections: [
          sec(
            'Description',
            p(
              'Huge Vaad Vivaad is a competitive debating event that challenges participants to defend their positions, analyse complex motions, and respond effectively to opposing arguments. Through a knockout format, debaters demonstrate confidence, logical reasoning, persuasive speaking, and quick thinking.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Eligibility', 'College students with valid IDs'),
              row('Format', 'Individual debating'),
              row('Tournament Structure', 'Single-elimination knockout'),
              row('Registration', 'Mandatory'),
              row('Date', '18 November 2026'),
              row('Timing', '10 AM onwards')
            )
          ),
          sec(
            'Competition Structure',
            ol(
              'The preliminary motion will be released three days before the competition.',
              'Subsequent motions will be announced 30 minutes before each round.',
              'A coin toss will determine the sides.',
              'The winner of the toss chooses Proposition or Opposition.',
              'The other debater takes the opposite side and speaks first.',
              'Each debater delivers one six-minute speech.',
              'The higher aggregate score advances to the next round.'
            )
          ),
          sec(
            'Speaking Rules',
            ul(
              'Each speaker gets 6 minutes.',
              'Time signals will be given at one minute remaining and at six minutes.',
              'Overtime incurs a one-mark penalty for every 15 seconds, up to 30 seconds.',
              'POIs of maximum 15 seconds are allowed between minutes 1 and 5.',
              'Each debater must accept at least one POI and may accept two.',
              'The final minute is protected from POIs.'
            )
          ),
          sec(
            'Preparation Rules',
            ol(
              'A maximum of 10 cue cards, each half-A5 in size, is permitted.',
              'During impromptu preparation, only organiser-provided paper and printed dictionaries are allowed.',
              'Electronic devices, AI tools, and external assistance are prohibited.',
              'Participants must prepare independently.'
            )
          ),
          sec(
            'General Rules',
            ol(
              'Participants must report 15 minutes before their scheduled round.',
              'Arrivals exceeding 10 minutes may result in a walkover.',
              'Misconduct, plagiarism, and unauthorized assistance may result in disqualification.',
              'Participants must maintain proper debating decorum.',
              'The Adjudication Panel’s decision is final and binding.'
            )
          ),
          sec(
            'Evaluation Criteria',
            p('Each speaker is evaluated out of 100 marks by three judges.'),
            table(
              ['Criteria', 'Marks'],
              ['Content & Analysis', '40'],
              ['Rebuttal & Engagement', '30'],
              ['Delivery & Style', '20'],
              ['Strategy & Time Management', '10'],
              ['Total', '100']
            )
          ),
          sec(
            'Result Declaration',
            ul(
              'The higher aggregate score wins.',
              'Ties will be decided by the Judge-in-Chief.',
              'The Adjudication Panel’s decision is final and binding.'
            )
          ),
        ],
      },
      {
        id: 'open-mic',
        label: 'Open Mic',
        kicker: 'AOS — Apostle of Speech',
        title: 'Open Mic',
        tagline: 'Your Voice. Your Story. Your Stage.',
        sections: [
          sec(
            'Description',
            p(
              'Open Mic is a creative platform for individuals to showcase their artistic expression and communication skills. Participants can share poetry, spoken word, storytelling, stand-up comedy, monologues, and other literary performances in their preferred language.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Participation', 'Individual'),
              row('Languages', 'English, Hindi, Punjabi, or a combination'),
              row('Performance Duration', 'Maximum 5 minutes'),
              row('Performances Allowed', 'One per participant'),
              row('Date', '18 November 2026'),
              row('Timing', '11:30 AM–1:30 PM')
            )
          ),
          sec(
            'Eligible Performance Types',
            ul(
              'Poetry',
              'Spoken Word',
              'Storytelling',
              'Stand-up Comedy',
              'Monologues',
              'Other literary performances'
            )
          ),
          sec(
            'Rules & Guidelines',
            ol(
              'Participants must report at least 15 minutes before the event begins.',
              'Each participant is allowed only one performance.',
              'The maximum performance duration is 5 minutes.',
              'Exceeding the time limit may result in the performance being stopped.',
              'Original content is encouraged; AI-generated content is discouraged.',
              'Written notes or mobile phones may be used solely for reading during performances.',
              'Props, musical instruments, and pre-recorded backing tracks are not permitted.',
              'Performances may be delivered in English, Hindi, Punjabi, or a combination of languages.',
              'Participants must maintain decorum and respect fellow performers, organisers, and the audience.'
            )
          ),
          sec(
            'Content Guidelines',
            ul(
              'Hate speech, discriminatory remarks, and harassment are prohibited.',
              'Excessively vulgar or sexually explicit content is not permitted.',
              'Humour, satire, and creative expression are welcome within these boundaries.'
            )
          ),
          sec(
            'Disqualification & Decisions',
            ol(
              'Rule violations may result in the performance being stopped or the participant being disqualified.',
              'Participants must follow the instructions of the organisers.',
              'The judge’s decision is final and binding.'
            )
          ),
        ],
      },
      {
        id: 'stories-love-ink',
        label: 'Stories, Love and Ink',
        kicker: 'AOS — Apostle of Speech',
        title: 'Stories, Love and Ink',
        tagline: 'Every Story Begins with a Thought.',
        sections: [
          sec(
            'Description',
            p(
              'Stories, Love and Ink is an on-the-spot creative writing competition that encourages participants to transform ideas into meaningful stories. Through imagination, originality, and expressive writing, participants create stories based on a given theme within a limited time.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Eligibility', 'Students from all colleges/institutions'),
              row('Participation', 'Individual'),
              row('Language', 'English'),
              row('Writing Duration', '1 hour'),
              row('Word Limit', '1,000–1,200 words'),
              row('Date', '19 November 2026'),
              row('Timing', '10:30 AM–11:30 AM')
            )
          ),
          sec(
            'Competition Structure',
            ol(
              'A topic or theme will be announced at the beginning of the competition or before submission.',
              'Participants must write a story strictly based on the given theme.',
              'Stories must be written on paper provided at the event.',
              'Participants will receive one hour to complete their stories.',
              'All content must be original and written independently during the competition.',
              'Participants must submit their stories within the allotted time.'
            )
          ),
          sec(
            'Rules & Guidelines',
            ol(
              'Registration before the event through the provided form or link is required.',
              'Late or on-the-spot entries may be considered only if time and schedule permit.',
              'Stories must follow the announced theme.',
              'The word limit must remain between 1,000 and 1,200 words.',
              'Electronic devices and external reference materials are not allowed.',
              'Offensive or inappropriate content is prohibited.',
              'Participants must maintain decorum and follow the organisers’ instructions.',
              'Plagiarism or misbehaviour will result in disqualification.'
            )
          ),
          sec(
            'Evaluation Criteria',
            table(
              ['Criteria', 'Description'],
              ['Creativity & Originality', 'Uniqueness of ideas and storytelling'],
              ['Plot Development & Coherence', 'Logical flow and story structure'],
              ['Language & Writing Style', 'Grammar, vocabulary, and expression'],
              ['Emotional Impact & Message', 'Ability to connect with readers and communicate meaning']
            )
          ),
          sec(
            'Final Decision',
            p('The decision of the judging panel and organising committee will be final and binding.')
          ),
        ],
      },
      {
        id: 'the-evidence',
        label: 'The Evidence',
        kicker: 'AOS — Apostle of Speech',
        title: 'The Evidence',
        tagline: 'Observe. Investigate. Uncover the Truth.',
        sections: [
          sec(
            'Description',
            p(
              'The Evidence is a two-day investigative competition designed to test teamwork, logical reasoning, observation, and analytical thinking. Participants work through a mystery case, examine clues, identify suspects, and use evidence to uncover the truth.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Team Size', '3 college students'),
              row('Eligibility', 'Enrolled college students with valid IDs'),
              row('Registration', 'Mandatory'),
              row('Competition Duration', '2 Days'),
              row('Date', '18–19 November 2026'),
              row('Timing', '12:30 PM onwards')
            )
          ),
          sec(
            'Day 1 — Team Investigation',
            ol(
              'Teams will receive a case file containing information and clues.',
              sub(
                'Each team must analyse the case to identify:',
                'The culprit',
                'The motive',
                'The method'
              ),
              'Teams must submit their written deductions within the allotted time.',
              'Collaboration is permitted only among the three team members.',
              'The top three teams will qualify for Day 2.'
            )
          ),
          sec(
            'Day 2 — Interactive Final',
            ol(
              'Nine finalists will compete individually.',
              'Finalists will portray assigned characters.',
              'Participants must investigate others to solve the mystery.',
              'Clues must be interpreted carefully to reach the correct conclusion.',
              'Tampering with clues or obstructing other participants is prohibited.',
              'Winners will be determined solely on individual performance.'
            )
          ),
          sec(
            'General Rules',
            ol(
              'All team members must be enrolled college students with valid IDs.',
              'Teams must arrive 15 minutes before the scheduled event.',
              'Participants must follow the instructions provided by the organisers.',
              'Unauthorized phone use, AI tools, external assistance, or misconduct may result in disqualification.',
              'Participants must not interfere with the investigation or other teams.',
              'Any form of clue tampering or deliberate obstruction is prohibited.'
            )
          ),
          sec(
            'Evaluation Criteria',
            p('Day 1 — Team Investigation'),
            ul(
              'Accuracy of deductions',
              'Evidence analysis',
              'Logical reasoning',
              'Clarity of written submission'
            ),
            p('Day 2 — Individual Final'),
            ul(
              'Investigation skills',
              'Clue interpretation',
              'Logical reasoning',
              'Character portrayal',
              'Accuracy of conclusion'
            )
          ),
          sec(
            'Tie-Breaker & Final Decision',
            ul(
              'Ties may be decided based on reasoning quality and submission time.',
              'Organisers’ decisions are final and binding.'
            )
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 06 */
  {
    id: 'achintyam',
    order: 6,
    name: 'Achintyam',
    club: 'Achintyam – Photography Club',
    hover: {
      keywords: 'Photography • Vision • Storytelling',
      blurb:
        'Observe the extraordinary, capture unique perspectives, and turn moments into visual stories.',
      cta: 'Explore Events →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: 'Photography Club • Apratim ’26',
        title: 'Achintyam',
        tagline: 'See Beyond the Ordinary. Capture the Extraordinary.',
        sections: [
          sec(
            'Description',
            p(
              'Achintyam is a creative platform for photography and filmmaking enthusiasts to express their perspectives through visual storytelling. It encourages participants to observe their surroundings, explore creative ideas, and communicate stories through photographs and videos.'
            )
          ),
          sec('Events', events(['photohunt', 'photography', 'videography'])),
          sec(
            'Event Information',
            kv(
              row('Organising Club', 'Achintyam – Photography Club'),
              row('Fest', 'Apratim ’26'),
              row('Participation', 'Individual / Team-based, depending on event'),
              row('Event Categories', 'Photography, Videography, Campus Treasure Hunt')
            ),
            note('Dates, timings, prompts, and submission details will be announced separately wherever not specified.')
          ),
        ],
      },
      {
        id: 'photohunt',
        label: 'PhotoHunt',
        kicker: 'Achintyam',
        title: 'PhotoHunt',
        tagline: 'Observe Closely. Decode the Clues. Own the Campus.',
        sections: [
          sec(
            'Description',
            p(
              'PhotoHunt is an engaging campus-based treasure hunt that challenges participants to observe their surroundings, interpret visual clues, and discover hidden locations or features across the campus. Teams must use observation, coordination, and problem-solving skills to complete the hunt.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Team Size', '1–3 participants'),
              row('Event Type', 'Campus-based clue hunt'),
              row('Location Scope', 'Within the college campus'),
              row('Time Limit', 'To be announced', 'unannounced'),
              row('Completion Method', 'Clue answers / Evidence submission')
            )
          ),
          sec(
            'Event Rules',
            ol(
              'Every clue will point to a location or feature within the campus.',
              'Participants must not leave the campus to solve clues.',
              'Teams must follow the instructions and clue sequence provided by the organisers.',
              'Answers and evidence must be submitted in the format specified by the organisers.',
              'Teams must complete the hunt within the announced time limit.'
            )
          ),
          sec(
            'Fair Play & Safety',
            ol(
              'Participants must not damage, move, or tamper with campus property, signs, or objects.',
              'Restricted areas must not be entered.',
              'Teams must not disturb classes, staff, students, or ongoing activities.',
              'Sharing clues or answers with other participating teams during the hunt is prohibited.',
              'Outside assistance, misleading submissions, or disruptive behaviour may result in disqualification.'
            )
          ),
          sec(
            'Completion & Winner Declaration',
            ul(
              'Teams must submit their final answers before the deadline.',
              'Late submissions may not be accepted.',
              'Winners may be determined by the number of correct answers and completion time.',
              'The final scoring method will be announced before the hunt begins.',
              'Any violation of the rules may lead to disqualification.',
              'The organisers’ decision will be final.'
            ),
            note('Stay Sharp. Stay Together. Find What Others Miss.')
          ),
        ],
      },
      {
        id: 'photography',
        label: 'Photography Competition',
        kicker: 'Achintyam',
        title: 'Photography Competition',
        tagline: 'One Prompt. One Perspective. A Frame That Says It All.',
        sections: [
          sec(
            'Description',
            p(
              'The Photography Competition provides participants with an opportunity to express their creativity through visual storytelling. Participants must capture an original photograph based on a prompt provided by the organisers, showcasing their perspective, composition, and photographic skills.'
            )
          ),
          sec(
            'Competition Format',
            kv(
              row('Participation', 'Individual'),
              row('Theme / Prompt', 'To be announced', 'unannounced'),
              row('Photograph', 'Recent photograph captured specifically for the competition'),
              row('Submission', 'Official submission method'),
              row('Dates & Timings', 'To be announced', 'unannounced')
            )
          ),
          sec(
            'The Challenge',
            ol(
              'A prompt will be announced or provided by the organisers.',
              'The photograph must clearly relate to the given prompt.',
              'Only recent photographs captured specifically for this competition are eligible.',
              'Older photographs will not be accepted.',
              'All entries must be original work captured by the participant.',
              'Stock photographs, copied images, or another person’s work are prohibited.'
            )
          ),
          sec(
            'Submission Guidelines',
            ol(
              'Submit the final photograph through the official submission method.',
              'Keep the original image file available for verification.',
              'Camera date, time, or original metadata may be checked if required.',
              'A short title or caption may be required through the submission form.',
              'Identifying watermarks or signatures must not be added to the image.',
              'Submission count, file format, size limit, and deadline will be announced by the organisers.'
            )
          ),
          sec(
            'Editing & AI Policy',
            ul(
              'AI-generated images and AI-based image generation, replacement, or manipulation are not allowed.',
              'Basic adjustments such as cropping, exposure, brightness, contrast, and colour correction are permitted.',
              'Heavy manipulation, compositing, or adding/removing major elements is prohibited.',
              'Participants must not present another person’s work as their own.'
            )
          ),
          sec(
            'Judging Criteria',
            p('Entries may be evaluated on:'),
            ol(
              'Relevance to the given prompt.',
              'Composition.',
              'Originality.',
              'Creativity.',
              'Visual impact.'
            )
          ),
          sec(
            'Disqualification & Final Decision',
            ul(
              'Plagiarism, AI use, misleading metadata, or failure to follow submission instructions may lead to disqualification.',
              'Judges’ and organisers’ decisions will be final.'
            ),
            note('Capture It Yourself. Keep It Authentic. Let Your Perspective Stand Out.')
          ),
        ],
      },
      {
        id: 'videography',
        label: 'Videography Competition',
        kicker: 'Achintyam',
        title: 'Videography Competition',
        tagline: 'Turn a Prompt into a Story Worth Watching.',
        sections: [
          sec(
            'Description',
            p(
              'The Videography Competition encourages participants to transform ideas into engaging visual stories. Participants must create an original video based on a given prompt, demonstrating their storytelling ability, cinematography, editing, and creative vision.'
            )
          ),
          sec(
            'Competition Format',
            kv(
              row('Participation', 'To be announced', 'unannounced'),
              row('Theme / Prompt', 'To be announced', 'unannounced'),
              row('Video Duration', '2–5 minutes, including credits'),
              row('Resolution', 'Minimum 720p, up to 4K'),
              row('Frame Rate', 'Up to 60 fps'),
              row('Recording Device', 'Any recording device'),
              row('Dates & Timings', 'To be announced', 'unannounced')
            )
          ),
          sec(
            'The Challenge',
            ol(
              'A prompt will be provided by the organisers.',
              'The submitted video must interpret and respond to the given prompt.',
              'Videos must be recent and created specifically for this competition.',
              'Previously published or recycled videos are not eligible.',
              'All footage and creative work must be original.',
              'Copied footage or another creator’s video without permission is prohibited.'
            )
          ),
          sec(
            'Film & Technical Guidelines',
            ol(
              'Video duration must be between 2 and 5 minutes, including credits.',
              'Any recording device may be used.',
              'Cameras and DSLRs are welcome but not compulsory.',
              'Minimum resolution must be 720p; resolutions up to 4K are accepted.',
              'Frame rates up to 60 fps are permitted.',
              'Voiceovers and original soundtracks are allowed.',
              'Borrowed music or audio must be legally usable, with credits provided where required.'
            )
          ),
          sec(
            'Editing, AI & Submission Rules',
            ul(
              'AI-generated video and AI-based generation or replacement of visual content are prohibited.',
              'Editing for cuts, transitions, colour correction, sound mixing, titles, and credits is allowed.',
              'Copied footage and misleading edits that claim another person’s work as original are prohibited.',
              'Participants must submit the final video through the official submission method.',
              'Original footage must be kept available for verification if requested.',
              'Submission link, deadline, file format, and raw-footage upload requirements will be announced by the organisers.'
            )
          ),
          sec(
            'Judging Criteria',
            p('Entries may be evaluated on:'),
            ol(
              'Relevance to the given prompt.',
              'Storytelling.',
              'Originality.',
              'Cinematography.',
              'Editing.',
              'Sound.'
            )
          ),
          sec(
            'Disqualification & Final Decision',
            ul(
              'Plagiarism, unauthorized use of copyrighted material, AI use, or failure to follow the guidelines may lead to disqualification.',
              'Judges’ and organisers’ decisions will be final.'
            ),
            note('Tell Your Story with Your Own Lens, Your Own Footage, and Your Own Voice.')
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 07 */
  {
    id: 'pbn',
    order: 7,
    name: 'PBN',
    hover: {
      keywords: 'Punjab • Culture • Tradition',
      blurb:
        'Celebrate the vibrant spirit of Punjab through the rhythm, colours, and energy of RAUNAK ’26.',
      cta: 'Feel the RAUNAK →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: 'Apratim ’26',
        title: 'PBN',
        tagline: 'Celebrating the Spirit and Culture of Punjab.',
        sections: [
          sec(
            'Description',
            p(
              'PBN brings the vibrant traditions of Punjab to Apratim ’26 through folk dance, music, and cultural expression. It provides participants with a platform to showcase the energy, rhythm, and heritage of Punjabi folk performances.'
            )
          ),
          sec('Event', events(['raunak-26'])),
          sec(
            'Event Information',
            kv(
              row('Organising Category', 'PBN'),
              row('Fest', 'Apratim ’26'),
              row('Event', 'RAUNAK ’26'),
              row('Participation', 'Individual and Team'),
              row('Tentative Participants', 'Approximately 50', 'tentative'),
              row('Event Day', 'Day 2'),
              row('Timing', '3:30 PM – 5:30 PM')
            )
          ),
        ],
      },
      {
        id: 'raunak-26',
        label: 'RAUNAK ’26 — Punjabi Folk Dance Competition',
        kicker: 'PBN',
        title: 'RAUNAK ’26',
        tagline: 'Celebrate Punjab. Feel the Rhythm. Own the Stage.',
        sections: [
          sec(
            'Description',
            p(
              'RAUNAK ’26 is an exciting cultural event where participants showcase the vibrant traditions of Punjabi folk dance. Participants can perform individually or in groups and choose any Punjabi folk dance style to celebrate the rich cultural heritage of Punjab.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Participation', 'Individual / Team'),
              row('Expected Participants', 'Approximately 50', 'tentative'),
              row('Dance Forms', 'Bhangra and other Punjabi folk dances'),
              row('Event Day', 'Day 2'),
              row('Timing', '3:30 PM – 5:30 PM')
            )
          ),
          sec(
            'General Rules',
            ol(
              'Bhangra or any other folk dance is allowed.',
              'Participants must bring their own songs on a pen drive.',
              'Vulgarity will not be tolerated.',
              'Each performance must last a minimum of 2 minutes and a maximum of 7 minutes.',
              'Participants must follow the instructions provided by the organisers.',
              'The decision of the judge will be final.'
            ),
            note('Celebrate the Rhythm. Showcase the Tradition. Bring on the RAUNAK!')
          ),
          sec(
            'Awards & Recognition',
            ul('1st, 2nd and 3rd position medals/trophies.')
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 08 */
  {
    id: 'beatles',
    order: 8,
    name: 'Beatles',
    club: 'Dance Club',
    hover: {
      keywords: 'Dance • Rhythm • Synchronization',
      blurb:
        'Bring the stage alive with energetic group performances and expressive duet dances.',
      cta: 'Explore Events →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: 'Beatles | Dance Club',
        title: 'Beatles',
        sections: [
          sec(
            'About the Club',
            p(
              'Beatles celebrates dance as a form of expression, creativity, and connection. Through group performances, partner routines, and interactive dance challenges, the club encourages participants to showcase their talent and stage presence.'
            )
          ),
          sec(
            'Events at Apratim ’26',
            table(
              ['Event', 'Schedule', 'Format'],
              ['Group Dance', 'Day 1', '6–25 participants/team'],
              ['Duet Dance', 'Day 2', '2 participants']
            ),
            events(['group-dance', 'duet-dance'])
          ),
          sec(
            'Common Awards & Recognition',
            ul(
              COMMON_AWARD_NOTE,
              'Judge mementos.',
              'Winner and participation certificates.'
            )
          ),
        ],
      },
      {
        id: 'group-dance',
        label: 'Group Dance',
        kicker: 'Day 1',
        title: 'Group Dance',
        tagline: '6–25 Participants / Team',
        sections: [
          sec(
            'About the Event',
            p(
              'Group Dance is the flagship dance competition where teams showcase dynamic choreography, synchronization, formations, musicality, and high-energy performances.'
            )
          ),
          sec('Performance Styles', ul('Western', 'Hip-Hop', 'Contemporary', 'Folk Fusion')),
          sec(
            'Performance Highlights',
            ul(
              'Group coordination and synchronization.',
              'Creative choreography and formations.',
              'Musicality, expressions, and timing.',
              'Effective stage utilization and energy.'
            )
          ),
          sec(
            'Awards & Recognition',
            ul(
              COMMON_AWARD_NOTE,
              '2 mementos for judges.',
              'Winner and participation certificates for all qualifying members.'
            )
          ),
        ],
      },
      {
        id: 'duet-dance',
        label: 'Duet Dance',
        kicker: 'Day 2',
        title: 'Duet Dance',
        tagline: '2 Participants / Pair',
        sections: [
          sec(
            'About the Event',
            p(
              'Duet Dance provides pairs with a platform to demonstrate chemistry, synchronization, artistic symmetry, and technical precision through expressive partner performances.'
            )
          ),
          sec('Performance Styles', ul('Classical', 'Contemporary', 'Urban Dance')),
          sec(
            'Performance Highlights',
            ul(
              'Partner coordination and synchronization.',
              'Lifting techniques and transitions.',
              'Emotional connection and expressions.',
              'Harmony and stage presentation.'
            )
          ),
          sec(
            'Awards & Recognition',
            ul(
              COMMON_AWARD_NOTE,
              '2 mementos for judges.',
              'Winner and participation certificates.'
            )
          ),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 09 */
  {
    id: 'seven-notes',
    order: 9,
    name: '7Notes',
    club: 'Music Club',
    hover: {
      keywords: 'Music • Melody • Harmony',
      blurb:
        'Celebrate musical talent through soulful singing, instrumental performances, and live fusion music.',
      cta: 'Feel the Music →',
    },
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        kicker: '7Notes • Music Club • Apratim 2026',
        title: '7Notes',
        tagline: 'Feel the Music. Find Your Rhythm. Own the Stage.',
        sections: [
          sec(
            'Description',
            p(
              '7Notes celebrates musical talent through vocal performances, instrumental music, and live band performances. It provides a platform for singers and musicians to showcase their skills, creativity, and passion for music across different performance formats.'
            )
          ),
          sec('Events', events(['solo-singing', 'duet-group-singing', 'solo-instrumental', 'aavartan'])),
          sec(
            'Event Information',
            table(
              ['Event', 'Day', 'Tentative Participants'],
              ['Solo Singing', 'Day 1', '25'],
              ['Duet / Group Singing', 'Day 2', '20'],
              ['Solo Instrumental', 'Day 2', '8'],
              ['Fusion Band — Aavartan', 'Day 1', 'Not specified']
            )
          ),
          sec(
            'Awards & Recognition',
            ul(
              'Solo Singing: 1st, 2nd and 3rd position medals/trophies.',
              'Duet / Group Singing: 1st, 2nd and 3rd position medals/trophies.',
              'Solo Instrumental: 1st, 2nd and 3rd position medals/trophies.',
              'Judges’ mementos and participation certificates for the respective competitions.',
              'Fusion Band — Aavartan: Live performance; no competition medals or trophies.'
            )
          ),
        ],
      },
      {
        id: 'solo-singing',
        label: 'Solo Singing',
        kicker: '7Notes',
        title: 'Solo Singing',
        tagline: 'One Voice. Endless Possibilities.',
        sections: [
          sec(
            'Description',
            p(
              'Solo Singing is an individual vocal competition where participants showcase their singing abilities through solo performances. Singers can perform with a backing track or live instrumental accompaniment, demonstrating their vocal skills, musical expression, and stage confidence.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Participation', 'Individual'),
              row('Tentative Participants', '25', 'tentative'),
              row('Performance Duration', '3–4 minutes'),
              row('Accompaniment', 'Backing track or maximum 2 instrumentalists'),
              row('Event Day', 'Day 1')
            )
          ),
          sec(
            'Rules & Guidelines',
            ol(
              'Each participant must perform within the time limit of 3–4 minutes.',
              'Singers may use a backing track or be accompanied by a maximum of two instrumentalists.',
              'Participants must follow the instructions provided by the organisers.',
              'Online registration is available.',
              'The decision of the judges will be final.'
            )
          ),
          sec(
            'Awards & Recognition',
            ul('1st, 2nd and 3rd position medals/trophies.', 'Two mementos for judges.', 'Participation certificates.')
          ),
        ],
      },
      {
        id: 'duet-group-singing',
        label: 'Duet / Group Singing',
        kicker: '7Notes',
        title: 'Duet / Group Singing',
        tagline: 'Together in Harmony. United Through Music.',
        sections: [
          sec(
            'Description',
            p(
              'Duet / Group Singing is a vocal performance competition that brings singers together to create harmonious musical performances. Participants can perform in pairs or groups, using backing tracks or live instrumental accompaniment to showcase their coordination, vocal abilities, and musical expression.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Participation', 'Duet / Group'),
              row('Maximum Team Size', '4 members'),
              row('Tentative Participants', '20', 'tentative'),
              row('Performance Duration', '3–5 minutes'),
              row('Accompaniment', 'Backing track or maximum 2 instrumentalists'),
              row('Event Day', 'Day 2')
            )
          ),
          sec(
            'Rules & Guidelines',
            ol(
              'Each performance must last between 3 and 5 minutes.',
              'A maximum of four singers are allowed per team.',
              'Singers may use a backing track or be accompanied by a maximum of two instrumentalists.',
              'Online registration is available.',
              'An instrumentalist may sing in only one group but may play instruments for multiple groups.',
              'Participants must follow the instructions provided by the organisers.',
              'The decision of the judges will be final.'
            )
          ),
          sec(
            'Awards & Recognition',
            ul('1st, 2nd and 3rd position medals/trophies.', 'Two mementos for judges.', 'Participation certificates.')
          ),
        ],
      },
      {
        id: 'solo-instrumental',
        label: 'Solo Instrumental',
        kicker: '7Notes',
        title: 'Solo Instrumental',
        tagline: 'Let Your Instrument Speak.',
        sections: [
          sec(
            'Description',
            p(
              'Solo Instrumental provides musicians with an opportunity to demonstrate their instrumental skills through individual performances. Participants can showcase their talent using instruments such as guitar, keyboard, flute, violin, and other suitable musical instruments.'
            )
          ),
          sec(
            'Participation & Format',
            kv(
              row('Participation', 'Individual'),
              row('Tentative Participants', '8', 'tentative'),
              row('Performance Duration', '4–5 minutes'),
              row('Setup & Sound Check', '5 minutes'),
              row('Instruments', 'To be arranged by participants'),
              row('Event Day', 'Day 2')
            )
          ),
          sec(
            'Rules & Guidelines',
            ol(
              'Each performance must last between 4 and 5 minutes.',
              'Participants will receive an additional 5 minutes for setup and sound check.',
              'Participants must bring their own instruments.',
              'No instruments will be provided by the organisers.',
              'Registration can be completed online or on the spot.',
              'Participants must follow the instructions provided by the organisers.',
              'The decision of the judges will be final.'
            )
          ),
          sec(
            'Awards & Recognition',
            ul('1st, 2nd and 3rd position medals/trophies.', 'One memento for the judge.', 'Participation certificates.')
          ),
        ],
      },
      {
        id: 'aavartan',
        label: 'Fusion Band — Aavartan',
        kicker: 'Live Band Performance',
        title: 'Fusion Band — Aavartan',
        tagline: 'Different Genres. One Sound. Infinite Energy.',
        sections: [
          sec(
            'Description',
            p(
              'Aavartan is a live fusion band performance featuring a full electric band setup with vocals, electric guitars, bass, and acoustic drums. The performance celebrates musical diversity through the fusion of different genres, creating an energetic live-stage experience.'
            )
          ),
          sec(
            'Performance Information',
            kv(
              row('Band', 'Aavartan'),
              row('Performance Type', 'Live Fusion Band'),
              row('Event Day', 'Day 1'),
              row(
                'Performance Duration',
                'Unresolved — rulebook: 10 minutes; technical document: 40–50 minutes',
                'conflict'
              ),
              row('Team Limit', 'Maximum 8 members'),
              row('Competition Awards', 'No competition medals/trophies')
            ),
            note(
              'The performance duration is not yet confirmed: the competition rulebook states 10 minutes, while the technical document states 40–50 minutes.'
            )
          ),
          sec(
            'Rules & Guidelines',
            ol(
              'The maximum team size is eight members.',
              'Performance duration is 10 minutes according to the competition rulebook.',
              'A maximum of 10 minutes is allowed for sound check.',
              'Original compositions will be appreciated.',
              'Fusion of different musical genres is expected.',
              'Backing tracks and vocal filtering are not allowed.',
              'Participants must follow the instructions provided by the organisers.'
            )
          ),
        ],
      },
    ],
  },
];

export const STATUS_LABELS = {
  tentative: 'Tentative',
  unannounced: 'To be announced',
  conflict: 'Unconfirmed',
};

export default eventsData;
