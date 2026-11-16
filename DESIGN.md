# Netflix Azərbaycan: cinematic catalogue v4

## Direction
Full-width dark hero stage, compact fixed navigation, film-specific Oswald title, white playback action and quiet translucent secondary controls. The hero remains a plain cinematic gradient unless a film image is explicitly rights-verified. The catalogue carries its local identity through Azerbaijani films and language.

## System
Canvas #101010, surface #202020, foreground #f7f7f2, muted #b6b6b6, brand red #e50914. Oswald is self-hosted for display; Segoe UI for interface copy. Spacing follows 4/8/12/16/24/32/40/64. Controls use 5px corners, media 6px, dialogs 12px. Focus is a visible pink outline. Hero gradients are legibility masks over real photography.

## Composition
Desktop: 86px fixed single-row navigation; 620–740px hero with copy left and three manually selected film-title covers bottom right. Rights-uncleared film frames are excluded from the public build. Collection navigation begins below the stage. Five landscape cards per desktop row, six on very wide screens, three on tablets, two on phones. Catalogue and classics use explicit previous/next pagination, with all 32 catalogue entries available on demand. No horizontal scrollers or internal collection scrollbars.

## Interaction and motion
All filters, shelf operations, recommendations, inline trailers, hover previews and native detail dialog retain existing logic. No timed hero rotation or scroll reveals. Motion answers selection, hover and opening, with reduced-motion overrides. Neutral covers keep intrinsic dimensions, async decoding and lazy loading; only a rights-verified real hero image receives eager/high priority. No framework or runtime dependencies added.

## Source application
frontend-design informed content-specific composition and typography; ai-slop informed factual controls, actual media and removal of ornamental sections; impeccable informed consistent spacing, states, contrast and responsive verification. Applied to this project, not claimed as globally installed skills.

## Verification and limits
Browser checked 320/390/768/1440 widths without page overflow. Combined search, reset, paging, 32-item expanded catalogue, recommendation independent of query, save/reload/remove, detail Esc/focus restoration and body scroll lock passed. Source check and build passed. Real phone and every YouTube embed were not reverified. Existing media rights remain unconfirmed; no deployment performed.

## Autoplay update
Film selection starts verified trailer with sound requested, native YouTube controls hidden. Local pause/resume and audio buttons remain accessible. Browser autoplay rejection shows a start button. YouTube overlays may still appear. Hover is muted; no full-film playback is implied.
