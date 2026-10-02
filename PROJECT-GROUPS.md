# Grouped mechanical work

Preview `work.html`, `well-connects.html`, and `air-source-heat-pumps.html` locally.
The group cards appear under All and Mechanical in More of Our Work.

Group records live in `portfolioData.groups` in `projects.js`, separate from
`galleries` and Featured Homes. Each record has `type: 'group'`,
`category: 'mechanical'`, `showInPortfolio: true`, its dedicated `href`, a
placeholder `cover`, and an empty `projects` array. No project dates are invented.

## Adding verified individual projects

Add records to `portfolioData.groups['well-connects'].projects` or
`portfolioData.groups['air-source-heat-pumps'].projects` in `projects.js`.
Each record supports:

- `title`: the verified project title.
- `cover`: `{ src: 'assets/...', alt: 'Description of the actual image' }`.
- `date`: optional `YYYY-MM-DD`; omit when unknown.
- `href`: the individual project's actual page or gallery URL.

Create the destination page/gallery and add its photography before adding the
record. An existing `project.html?category=...&project=...` gallery may also be
linked if its individual record already exists in `portfolioData.galleries`.
Group children are shown in array order and do not automatically appear as
additional cards on More of Our Work.

The shared `project-groups.js` renderer replaces development placeholders as
soon as real projects exist. Placeholders have no links or invented job details.
`project-groups.css` sets three columns above 900px, two at 601–900px, and one at
600px and below, using the existing Our Work card classes.

## Adding another group

Add a group record with the same shape to `portfolioData.groups`. Copy one of
the group HTML pages, update its title, description, visible heading, text, and
`body`'s `data-project-group` key, and match the record's `href` to the new file.
Include `projects.js`, `script.js`, `project-groups.js`, `styles.css`, and
`project-groups.css`. Do not add gallery or single-job rendering attributes.
