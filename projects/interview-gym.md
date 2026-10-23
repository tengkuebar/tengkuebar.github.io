---
title: Interview Gym
permalink: /projects/interview-gym/
description: Case study of Interview Gym, a personal app for practising interviews out loud with local AI characters, where the language model, voices and speech recognition all run on my own computer.
lightbox: true
---

<article class="case">
  <a class="back-link" href="{{ '/projects/' | relative_url }}">&larr; All projects</a>
  <p class="kind">Personal project, built with an AI coding assistant</p>
  <h1>Interview Gym</h1>
  <p class="intro">An app for practising interviews and workplace conversations out loud. You talk to an AI character, a recruiter, a hiring manager or a senior colleague, and get a short coach report afterwards. It is built for people who find interviews draining and want low-stakes practice with no audience. The language model, the voices and the speech recognition all run on my own computer, so nothing is sent to a cloud service.</p>

  <div class="strip">
    <div><h2>My role</h2><p>I wrote the requirements and the design spec, set the scope and reviewed the work. Claude Code, an AI coding assistant, wrote the code under my direction.</p></div>
    <div><h2>Built with</h2><ul class="tags"><li>Python</li><li>FastAPI</li><li>Next.js</li><li>TypeScript</li><li>SQLite</li><li>Ollama</li><li>faster-whisper</li><li>Kokoro</li><li>Claude Code</li></ul></div>
  </div>

  <section class="case-section" aria-labelledby="how-h">
    <h2 id="how-h">How it works</h2>
    <ul>
      <li>You pick one of three characters (Priya the recruiter, Dave the hiring manager, Mel the senior colleague), a difficulty of Gentle, Realistic or Tough, and optionally paste a job ad so the questions fit the role.</li>
      <li><strong>Voice mode</strong> listens until you pause, replies out loud and lets you interrupt. <strong>Typed chat</strong> is the same conversation with message bubbles. Captions are always on, and spoken replies are off until you choose them.</li>
      <li>The characters follow strict rules: one question per turn, short answers, no coaching mid-conversation and no invented facts about you. The coach is a separate prompt that only reads the finished transcript.</li>
      <li>A voice setup flow checks the microphone, tests how well each speech model hears you and saves your own word list on the computer. Recordings are not saved.</li>
      <li>Sessions are stored in a local SQLite database and any of them, or all of them, can be deleted.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="coach-h">
    <h2 id="coach-h">A coach report that does not make things up</h2>
    <ul>
      <li>Every strength and the one focus area must quote your own words. The code checks that each quote appears word for word in your answers. A quote that does not is dropped and the call is retried once.</li>
      <li>The numbers, such as filler words, hedges like "kind of", questions you asked back and your share of the talking, are counted by plain code, not guessed by the model.</li>
      <li>There are no scores out of 100. Feedback is split into what worked and one thing to try next, with a fill-in sentence whose gaps are in [square brackets] so the coach cannot add details you never said.</li>
      <li>Each character has its own checklist. The recruiter screen checks Situation, Task, Action and Result, and a check is marked "not yet" when the answers were too short to tell.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="care-h">
    <h2 id="care-h">Privacy and accessibility choices</h2>
    <ul>
      <li>The model runs through Ollama on this machine. Speech to text uses faster-whisper and text to speech uses Kokoro, both on the CPU. The backend allows only the local front end as an origin.</li>
      <li>If the model is not running, the app shows a clear message instead of failing silently.</li>
      <li>The design spec sets contrast ratios against WCAG, keeps visible focus rings, honours reduced motion and has a light and dark theme. The accent colour is never used for text on the light theme because it fails the contrast check.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="limits-h">
    <h2 id="limits-h">Limits</h2>
    <ul>
      <li>It is a practice tool, not a judge of how an interview will go. A 9 billion parameter local model gives good practice but not expert coaching, and it can still make mistakes.</li>
      <li>It is built for one person on one Windows computer. It needs Ollama installed, and voice models download the first time they are needed.</li>
      <li>The repository has no automated test suite yet. I checked it by using it.</li>
      <li>A packaged InterviewGym.exe can be built with PyInstaller, but it still needs Ollama.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="shots-h">
    <h2 id="shots-h">Screenshots</h2>
    <ul class="shots">
      <li><a href="{{ '/assets/img/interview-gym/practice.webp' | relative_url }}"><img src="{{ '/assets/img/interview-gym/practice.webp' | relative_url }}" alt="Interview Gym start screen with three characters, a difficulty choice and a Start voice practice button" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/interview-gym/report.webp' | relative_url }}"><img src="{{ '/assets/img/interview-gym/report.webp' | relative_url }}" alt="Interview Gym coach report with strengths that quote the candidate, one thing to try next, a story shape checklist and counted numbers" loading="lazy"></a></li>
    </ul>
    <p class="fineprint">The report screenshot comes from a short scripted practice conversation that I wrote for the demo, not from a real interview.</p>
  </section>

  <div class="case-foot">
    <a href="{{ '/projects/' | relative_url }}">&larr; All projects</a>
    <a href="{{ '/projects/beyondreaim/' | relative_url }}">Back to the first project: BeyondReAim &rarr;</a>
  </div>
</article>
