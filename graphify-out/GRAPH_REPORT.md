# Graph Report - .  (2026-07-18)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1650 nodes · 3533 edges · 152 communities (88 shown, 64 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 174 edges (avg confidence: 0.74)
- Token cost: 4,454 input · 6,530 output

## Graph Freshness
- Built from commit: `19cde764`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Spine Animation Runtime
- Markdown Parser
- Site Styles & Widgets
- UI Components & i18n
- Dev Dependencies & Build
- Biome Config
- Display Settings UI
- Spine Data Parsing
- Spine Animation Utilities
- Post Display Components
- Table of Contents
- TypeScript Config
- Album & Photo Pages
- Sakura Particle Effects
- Display Settings Logic
- Comment System Integrations
- Highlight.js Internals
- Spine Debug Drawing
- Dynamic Content Pages
- Floating UI Widgets
- Site Configuration Modules
- Astro Config & Rehype Plugins
- WebGL Shader Compilation
- Theme Settings Utilities
- Highlight.js Language Internals
- Asset Loading Utilities
- Spine Animation Track Management
- Spine Animation Mixing
- Navigation & Cover Images
- Spine Skin & Attachment
- Spine Clipping & Triangulation
- Font Subsetting
- Additional Dependencies
- Overlay Settings
- Music Player UI
- Anime Grid UI
- Card Component with Covers
- Icon Generation Script
- Dynamic Feed UI
- Encrypted Content
- Diagram Rendering Plugins
- Spine Bone Transform
- Font & Image API Route
- PlantUML Encoding & Plugin
- WebGL Texture Binding
- Math Utilities (Matrices)
- Background Wallpaper Config
- Navbar Configuration
- Wallpaper Display Modes
- Navigation Utilities
- Spine Skin & Mesh
- WebGL Uniform Setters
- LQIP Generation
- Pagination & Masonry Layout
- Typewriter Text Effect
- Font Configuration & Providers
- PlantUML Render Script
- Bangumi Data Types
- Front Matter CMS Config
- Data Conversion Utilities
- New Dynamic Post Script
- Friends Page Config
- Global Type Declarations
- Dynamic Content API
- Vercel Config
- Spine Animation State
- Bangumi Section UI
- Calendar Component
- Expressive Code Config
- Diagram Pan/Zoom Script
- New Post Script
- Gallery Config
- Mermaid Config
- Pio Widget Config
- Sponsor Config
- Icon Utilities
- Content Collections Config
- Build Platform Detection
- Spine World Transform
- Back to Top Button
- Dropdown Menu
- Analytics Config
- Dynamic Content Config
- Footer Config
- PlantUML Config
- Environment Type Declarations
- PlantUML Theme Switch
- Polygon Triangulation
- Dynamic Gallery Script
- Announcement Config
- Cover Image Config
- Robots.txt Generation
- Astro Icon Integration
- @astrojs/cloudflare
- @astrojs/markdown-remark
- @astrojs/markdown-satteri
- @astrojs/mdx
- @astrojs/rss
- @astrojs/sitemap
- @astrojs/svelte
- Expressive Code Collapsible
- Expressive Code Language Badge
- Expressive Code Collapsible Sections
- Expressive Code Line Numbers
- FancyApps UI
- Glob
- Hastscript
- Iconify Font Awesome Regular
- Iconify Font Awesome Solid
- Iconify Material Symbols
- Iconify MingCute
- Iconify Simple Icons
- Iconify Utils
- KaTeX
- Merman Web
- Napi WASM Runtime
- Astro Expressive Code
- Day.js
- L2D Widget
- Pagefind
- Pako
- QR Code
- Reading Time
- Rehype Autolink Headings
- Rehype Components
- Rehype KaTeX
- Remark Admonition Callout
- Remark Directive
- Remark Math
- Remark Sectionize
- Sanitize HTML
- Satori
- Satteri
- Sharp
- Svelte
- Swup Astro
- Tailwind CSS
- Tailwind Typography
- TSX
- Hast Types
- Mdast Types
- TypeScript
- Unist Visit
- Wrangler
- DropdownItem Astro

## God Nodes (most connected - your core abstractions)
1. `@/config` - 97 edges
2. `i18n()` - 60 edges
3. `draw()` - 45 edges
4. `url()` - 43 edges
5. `update()` - 42 edges
6. `constructor()` - 37 edges
7. `readAnimation()` - 32 edges
8. `apply()` - 29 edges
9. `r` - 28 edges
10. `readSkeletonData()` - 28 edges

## Surprising Connections (you probably didn't know these)
- `init()` --indirect_call--> `e()`  [INFERRED]
  src/components/features/MusicManager.astro → public/assets/js/highlight.min.js
- `loadTrack()` --indirect_call--> `e()`  [INFERRED]
  src/components/features/MusicManager.astro → public/assets/js/highlight.min.js
- `rehypeMermaid()` --indirect_call--> `e()`  [INFERRED]
  src/plugins/rehype-mermaid.mjs → public/assets/js/highlight.min.js
- `collectChars()` --indirect_call--> `c()`  [INFERRED]
  scripts/subset-fonts.ts → public/assets/js/highlight.min.js
- `initAll()` --indirect_call--> `c()`  [INFERRED]
  src/plugins/diagram-panzoom-script.js → public/assets/js/highlight.min.js

## Import Cycles
- None detected.

## Communities (152 total, 64 thin omitted)

### Community 0 - "Spine Animation Runtime"
Cohesion: 0.02
Nodes (31): containsPoint(), containsPointPolygon(), decompose(), drawRegion(), getHeight(), getMean(), getPath(), getWorldScaleX() (+23 more)

### Community 1 - "Markdown Parser"
Cohesion: 0.06
Nodes (44): n, Oe(), t(), blockTokens(), br(), checkbox(), codespan(), def() (+36 more)

### Community 2 - "Site Styles & Widgets"
Cohesion: 0.06
Nodes (17): @/styles/fancybox-custom.css, @/styles/main.css, @/styles/markdown-extend.styl, @/styles/variables.styl, cyclePlayMode(), init(), loadLyrics(), loadTrack() (+9 more)

### Community 3 - "UI Components & i18n"
Cohesion: 0.09
Nodes (18): paddingStyle, getTranslation(), i18n(), GET(), totalPosts, topTags, Category, getCategoryList() (+10 more)

### Community 4 - "Dev Dependencies & Build"
Cohesion: 0.05
Nodes (43): @astrojs/ts-plugin, @biomejs/biome, @iconify-json/mdi, @iconify-json/svg-spinners, devDependencies, @astrojs/ts-plugin, @biomejs/biome, @iconify-json/mdi (+35 more)

### Community 5 - "Biome Config"
Cohesion: 0.05
Nodes (41): source, assist, actions, files, ignoreUnknown, includes, formatter, enabled (+33 more)

### Community 6 - "Display Settings UI"
Cohesion: 0.11
Nodes (12): opacity, profileLabel, I18nKey, en, ja, ko, ru, zh_CN (+4 more)

### Community 7 - "Spine Data Parsing"
Cohesion: 0.14
Nodes (38): V, ae(), E(), findEvent(), findIkConstraint(), findPathConstraint(), findPhysicsConstraint(), findSkin() (+30 more)

### Community 8 - "Spine Animation Utilities"
Cohesion: 0.14
Nodes (35): add(), addAnimation(), calculateAnimationViewport(), clamp(), contains(), create(), disposeAsset(), distance() (+27 more)

### Community 9 - "Post Display Components"
Cohesion: 0.12
Nodes (17): apiUrl, noRandomPostsText, noRelatedPostsText, relatedIds, licenseConfig, profileConfig, getStaticPaths(), formatDateToYYYYMMDD() (+9 more)

### Community 10 - "Table of Contents"
Cohesion: 0.13
Nodes (9): text(), computeTocItems(), escapeHtmlAttr(), renderBadgeInnerHTML(), renderTocItemHTML(), TocInput, TocItem, TOCConfig (+1 more)

### Community 11 - "TypeScript Config"
Cohesion: 0.06
Nodes (31): astro/tsconfigs/base, .astro/types.d.ts, src/**/*, ./src/assets/*, ./src/components/*, ./src/constants/*, ./src/i18n/*, ./src/layouts/* (+23 more)

### Community 12 - "Album & Photo Pages"
Cohesion: 0.11
Nodes (18): lqipProps, spineModelConfig, applyFilters(), connectedCallback(), handleClick(), getQrLqipProps(), getAlbumCover(), scanAlbumPhotos() (+10 more)

### Community 13 - "Sakura Particle Effects"
Cohesion: 0.11
Nodes (10): sakuraConfig, SakuraConfig, getRandom(), getSakuraStatus(), initSakura(), Sakura, SakuraList, SakuraManager (+2 more)

### Community 14 - "Display Settings Logic"
Cohesion: 0.09
Nodes (24): opacity, refreshAllRangeProgress(), resetBannerSettings(), resetGradientEnabled(), resetHue(), resetWallpaperMode(), resetWavesEnabled(), switchWallpaperMode() (+16 more)

### Community 15 - "Comment System Integrations"
Cohesion: 0.09
Nodes (16): https://unpkg.com/artalk/dist/Artalk.mjs, https://esm.sh/giscus, config, widget, config, config, announcementConfig, commentConfig (+8 more)

### Community 16 - "Highlight.js Internals"
Cohesion: 0.17
Nodes (25): b(), c(), d(), e(), f(), g(), h(), I() (+17 more)

### Community 17 - "Spine Debug Drawing"
Cohesion: 0.17
Nodes (29): begin(), check(), circle(), clear(), curve(), draw(), drawFrame(), drawInCoordinates() (+21 more)

### Community 18 - "Dynamic Content Pages"
Cohesion: 0.10
Nodes (17): anchorId, profileLabel, published, timezone, limit, buildTime, bangumiConfig, buildTime (+9 more)

### Community 19 - "Floating UI Widgets"
Cohesion: 0.10
Nodes (14): @/styles/dynamic.css, @/styles/expressive-code.css, @/styles/markdown.css, @/styles/toc.css, sidebarLayoutConfig, dataUrl, itemsPerPage, showInlineComments (+6 more)

### Community 20 - "Site Configuration Modules"
Cohesion: 0.13
Nodes (18): defaultFavicons, CommentConfig, LicenseConfig, MusicPlayerConfig, ProfileConfig, AdConfig, CalendarConfig, DynamicWidgetConfig (+10 more)

### Community 21 - "Astro Config & Rehype Plugins"
Cohesion: 0.12
Nodes (13): code(), GithubCardComponent(), injectedTrees, rehypeDiagramPanZoom(), rehypeEmailProtection(), rehypeExternalLinks(), rehypeImageReferrerPolicy(), ADMONITION_TYPES (+5 more)

### Community 22 - "WebGL Shader Compilation"
Cohesion: 0.09
Nodes (25): addEventListener(), addListener(), compile(), compileProgram(), compileShader(), constructor(), fn(), load() (+17 more)

### Community 23 - "Theme Settings Utilities"
Cohesion: 0.12
Nodes (25): DEFAULT_THEME, applyThemeToDocument(), cleanupSystemThemeListener(), getDefaultBannerCarouselEnabled(), getDefaultBannerTitleEnabled(), getDefaultGradientEnabled(), getDefaultHue(), getDefaultSakuraEnabled() (+17 more)

### Community 24 - "Highlight.js Language Internals"
Cohesion: 0.12
Nodes (4): l, o, d(), walkTokens()

### Community 25 - "Asset Loading Utilities"
Cohesion: 0.21
Nodes (18): a(), r, h(), error(), loadBinary(), loadBinaryAsync(), loadJson(), loadJsonAsync() (+10 more)

### Community 26 - "Spine Animation Track Management"
Cohesion: 0.11
Nodes (21): addAnimationWith(), addEmptyAnimation(), clearNext(), clearTrack(), clearTracks(), complete(), dispose(), drain() (+13 more)

### Community 27 - "Spine Animation Mixing"
Cohesion: 0.16
Nodes (20): apply(), applyAttachmentTimeline(), applyInternal(), applyMixingFrom(), applyRotateTimeline(), getAbsoluteValue(), getAbsoluteValue2(), getAnimationTime() (+12 more)

### Community 28 - "Navigation & Cover Images"
Cohesion: 0.19
Nodes (13): filterLinks(), isPageEnabled(), syncBgPlayerBtn(), toggleBgPlayerIcon(), coverImageConfig, musicPlayerConfig, rehypeFigure(), ImageFormat (+5 more)

### Community 29 - "Spine Skin & Attachment"
Cohesion: 0.20
Nodes (19): attachAll(), getAttachment(), getAttachmentByName(), isActive(), setAttachment(), setBonesToSetupPose(), setSkin(), setSkinByName() (+11 more)

### Community 30 - "Spine Clipping & Triangulation"
Cohesion: 0.14
Nodes (17): addAfterPosition(), addBeforePosition(), addCurvePosition(), clip(), clipEnd(), clipEndWithSlot(), clipStart(), clipTriangles() (+9 more)

### Community 31 - "Font Subsetting"
Cohesion: 0.23
Nodes (13): collectChars(), contentHash(), detectFontFormat(), extractTextFromHtml(), fullHash(), getLocalSubsetFonts(), LocalSubsetFont, main() (+5 more)

### Community 32 - "Additional Dependencies"
Cohesion: 0.13
Nodes (15): @astrojs/check, @iconify-json/fa7-brands, mdast-util-to-string, dependencies, astro, @astrojs/check, ci-info, @iconify-json/fa7-brands (+7 more)

### Community 33 - "Overlay Settings"
Cohesion: 0.23
Nodes (15): resetOverlaySettings(), applyOverlayBlurToDocument(), applyOverlayCardOpacityToDocument(), applyOverlayOpacityToDocument(), applyStoredOverlaySettingsToDocument(), clampNumber(), getDefaultOverlayBlur(), getDefaultOverlayCardOpacity() (+7 more)

### Community 34 - "Music Player UI"
Cohesion: 0.23
Nodes (10): renderLyricsUI(), renderPlaylist(), syncAll(), updateLrcHighlight(), updatePlaylistActiveUI(), viewConfigStr, vsCommitRange(), vsCreateItemEl() (+2 more)

### Community 35 - "Anime Grid UI"
Cohesion: 0.18
Nodes (9): currentPage, filteredItems, filterOptions, handleSearch(), I18nKey, pagedItems, resetPage(), setFilter() (+1 more)

### Community 36 - "Card Component with Covers"
Cohesion: 0.16
Nodes (12): coverFallbacks, getFailedCovers(), handleError(), hiddenTagCount, images, initialSrc, markCoverFailed(), score (+4 more)

### Community 37 - "Icon Generation Script"
Cohesion: 0.22
Nodes (12): __dirname, extractIconNames(), generateIconsFile(), getAllFiles(), getIconSvg(), ICON_SETS, iconSetCache, loadIconSet() (+4 more)

### Community 38 - "Dynamic Feed UI"
Cohesion: 0.19
Nodes (10): applyFilters(), createItem(), currentPage, failed, goToPage(), loading, pageEntries, renderItems() (+2 more)

### Community 39 - "Encrypted Content"
Cohesion: 0.21
Nodes (6): base64ToBytes(), decrypt(), encryptedData, labels, deriveBytes(), encryptContent()

### Community 40 - "Diagram Rendering Plugins"
Cohesion: 0.29
Nodes (8): buildMermaidSvgs(), mermanWasmUrl, rehypeMermaid(), removeSvgMaxWidth(), generateId(), rehypePlantuml(), scriptInjectedTrees, extractText()

### Community 41 - "Spine Bone Transform"
Cohesion: 0.29
Nodes (11): aabbCompute(), apply1(), apply2(), applyAbsoluteLocal(), applyRelativeLocal(), getRootBone(), invert(), obtain() (+3 more)

### Community 42 - "Font & Image API Route"
Cohesion: 0.29
Nodes (10): convertedImageCache, fetchNotoSansSCFonts(), FontOptions, FontStyle, GET(), getSharp(), getStaticPaths(), getTransparentPngBase64() (+2 more)

### Community 43 - "PlantUML Encoding & Plugin"
Cohesion: 0.36
Nodes (9): append3bytes(), buildUrl(), encode64(), encode6bit(), encodePlantUML(), hasExplicitTheme(), injectTheme(), DEFAULT_OPTIONS (+1 more)

### Community 44 - "WebGL Texture Binding"
Cohesion: 0.24
Nodes (10): bind(), drawWithOffset(), get(), getAttributeLocation(), getCache(), setFilters(), setTexture(), setTextures() (+2 more)

### Community 45 - "Math Utilities (Matrices)"
Cohesion: 0.20
Nodes (10): cross(), identity(), length(), lookAt(), multiply(), normalize(), ortho(), ortho2d() (+2 more)

### Community 46 - "Background Wallpaper Config"
Cohesion: 0.27
Nodes (5): backgroundWallpaper, BackgroundWallpaperConfig, getBackgroundImages(), getDefaultBackground(), toArray()

### Community 47 - "Navbar Configuration"
Cohesion: 0.29
Nodes (7): LinkPresets, navBarConfig, navBarSearchConfig, NavBarConfig, NavBarLink, NavBarSearchConfig, NavBarSearchMethod

### Community 48 - "Wallpaper Display Modes"
Cohesion: 0.51
Nodes (10): isHomePage(), adjustMainContentPosition(), adjustMainContentTransparency(), applyWallpaperModeToDocument(), ensureWallpaperState(), hideAllWallpapers(), showBannerMode(), showFullscreenMode() (+2 more)

### Community 49 - "Navigation Utilities"
Cohesion: 0.31
Nodes (8): fallbackNavigation(), getCurrentPath(), isHomePage(), isPostPage(), isSwupReady(), navigateToPage(), preloadPage(), waitForSwup()

### Community 50 - "Spine Skin & Mesh"
Cohesion: 0.28
Nodes (9): addSkin(), copy(), copySkin(), copyTo(), getAttachments(), newLinkedMesh(), setFromColor(), setParentMesh() (+1 more)

### Community 51 - "WebGL Uniform Setters"
Cohesion: 0.22
Nodes (9): getUniformLocation(), setUniform2f(), setUniform2x2f(), setUniform3f(), setUniform3x3f(), setUniform4f(), setUniform4x4f(), setUniformf() (+1 more)

### Community 52 - "LQIP Generation"
Cohesion: 0.36
Nodes (7): filePathToKey(), IGNORE_DIRS, LqipMap, main(), processImage(), RgbColor, rgbToHex()

### Community 53 - "Pagination & Masonry Layout"
Cohesion: 0.32
Nodes (3): applyMasonryLayout(), resetMasonryLayout(), updatePostListLayout()

### Community 54 - "Typewriter Text Effect"
Cohesion: 0.39
Nodes (6): constructor(), getCurrentText(), isTypewriterEnabled(), private(), segmentText(), showRandomText()

### Community 55 - "Font Configuration & Providers"
Cohesion: 0.32
Nodes (6): fontConfig, fontsList, BuiltinFontProvider, CustomFontProvider, FontDefinition, FontSelectionConfig

### Community 56 - "PlantUML Render Script"
Cohesion: 0.50
Nodes (6): applyTheme(), bindErrorHandler(), bindLoadHandler(), initAll(), initInteraction(), openFullscreen()

### Community 57 - "Bangumi Data Types"
Cohesion: 0.25
Nodes (7): CollectionType, SlimSubject, SubjectImages, SubjectTag, SubjectType, UserSubjectCollection, UserSubjectCollectionResponse

### Community 58 - "Front Matter CMS Config"
Cohesion: 0.29
Nodes (6): frontMatter.content.pageFolders, frontMatter.content.publicFolder, frontMatter.framework.id, frontMatter.preview.host, frontMatter.taxonomy.contentTypes, $schema

### Community 59 - "Data Conversion Utilities"
Cohesion: 0.29
Nodes (7): base64ToUint8Array(), dataUriToString(), dataUriToUint8Array(), downloadBinary(), downloadJson(), downloadText(), finish()

### Community 60 - "New Dynamic Post Script"
Cohesion: 0.29
Nodes (5): content, dateParts, fullPath, now, targetDir

### Community 61 - "Friends Page Config"
Cohesion: 0.38
Nodes (5): friendsConfig, friendsPageConfig, getEnabledFriends(), FriendLink, FriendsPageConfig

### Community 62 - "Global Type Declarations"
Cohesion: 0.29
Nodes (4): HTMLElementTagNameMap, MediaQueryList, SearchResult, Window

### Community 63 - "Dynamic Content API"
Cohesion: 0.62
Nodes (5): GET(), dynamicPlainText(), dynamicSearchText(), dynamicSlug(), sortDynamics()

### Community 64 - "Vercel Config"
Cohesion: 0.29
Nodes (6): buildCommand, cleanUrls, framework, headers, installCommand, outputDirectory

### Community 65 - "Spine Animation State"
Cohesion: 0.33
Nodes (6): addAll(), _animationsChanged(), computeHold(), getPropertyIds(), hasTimeline(), setTimelines()

### Community 68 - "Expressive Code Config"
Cohesion: 0.40
Nodes (4): expressiveCodeConfig, ExpressiveCodeConfig, PluginCollapsibleConfig, PluginLanguageBadgeConfig

### Community 69 - "Diagram Pan/Zoom Script"
Cohesion: 0.60
Nodes (4): initAll(), initInteraction(), openFullscreen(), selectTarget()

### Community 70 - "New Post Script"
Cohesion: 0.40
Nodes (3): args, dirPath, fullPath

### Community 71 - "Gallery Config"
Cohesion: 0.50
Nodes (3): galleryConfig, GalleryAlbum, GalleryConfig

### Community 72 - "Mermaid Config"
Cohesion: 0.50
Nodes (3): mermaidConfig, MermaidConfig, MermaidThemeName

### Community 73 - "Pio Widget Config"
Cohesion: 0.60
Nodes (3): live2dWidgetConfig, Live2DWidgetConfig, SpineModelConfig

### Community 74 - "Sponsor Config"
Cohesion: 0.50
Nodes (3): SponsorConfig, SponsorItem, SponsorMethod

### Community 76 - "Content Collections Config"
Cohesion: 0.40
Nodes (4): collections, dynamicCollection, postsCollection, specCollection

### Community 77 - "Build Platform Detection"
Cohesion: 0.60
Nodes (4): detectBuildPlatform(), DetectBuildPlatformOptions, envUrlHostEquals(), hasNonEmptyEnv()

### Community 78 - "Spine World Transform"
Cohesion: 0.67
Nodes (4): applyAbsoluteWorld(), applyRelativeWorld(), localToWorld(), updateAppliedTransform()

### Community 79 - "Back to Top Button"
Cohesion: 0.83
Nodes (3): constructor(), init(), setupScrollListener()

### Community 80 - "Dropdown Menu"
Cohesion: 0.83
Nodes (3): closeDropdown(), openDropdown(), toggleDropdown()

### Community 85 - "Environment Type Declarations"
Cohesion: 0.50
Nodes (3): ImportMetaEnv, ITOCManager, Window

### Community 86 - "PlantUML Theme Switch"
Cohesion: 1.00
Nodes (3): applyTheme(), bindErrorHandler(), initAll()

### Community 87 - "Polygon Triangulation"
Cohesion: 1.00
Nodes (3): isConcave(), positiveArea(), triangulate()

## Knowledge Gaps
- **274 isolated node(s):** `$schema`, `frontMatter.framework.id`, `frontMatter.preview.host`, `frontMatter.content.publicFolder`, `frontMatter.content.pageFolders` (+269 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **64 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `c()` connect `Highlight.js Internals` to `Markdown Parser`, `UI Components & i18n`, `Diagram Pan/Zoom Script`, `Spine Bone Transform`, `WebGL Shader Compilation`, `Asset Loading Utilities`, `Font Subsetting`?**
  _High betweenness centrality (0.169) - this node is a cross-community bridge._
- **Why does `getCategoryList()` connect `UI Components & i18n` to `Highlight.js Internals`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Why does `@/config` connect `Comment System Integrations` to `Site Styles & Widgets`, `UI Components & i18n`, `Display Settings UI`, `Post Display Components`, `Album & Photo Pages`, `Sakura Particle Effects`, `Display Settings Logic`, `Dynamic Content Pages`, `Floating UI Widgets`, `Site Configuration Modules`, `Astro Config & Rehype Plugins`, `Theme Settings Utilities`, `Navigation & Cover Images`, `Font Subsetting`, `Background Wallpaper Config`, `Navbar Configuration`, `Pagination & Masonry Layout`, `Font Configuration & Providers`, `Friends Page Config`, `Calendar Component`, `Expressive Code Config`, `Gallery Config`, `Mermaid Config`, `Pio Widget Config`, `Sponsor Config`, `Analytics Config`, `Dynamic Content Config`, `Footer Config`, `PlantUML Config`, `Announcement Config`, `Cover Image Config`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Are the 12 inferred relationships involving `draw()` (e.g. with `a()` and `b()`) actually correct?**
  _`draw()` has 12 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `frontMatter.framework.id`, `frontMatter.preview.host` to the rest of the system?**
  _274 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Spine Animation Runtime` be split into smaller, more focused modules?**
  _Cohesion score 0.016608685893839074 - nodes in this community are weakly interconnected._
- **Should `Markdown Parser` be split into smaller, more focused modules?**
  _Cohesion score 0.060451977401129946 - nodes in this community are weakly interconnected._