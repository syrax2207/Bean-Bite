# Asset Manifest

## Rules

Track every image, logo, font and other third-party asset used by the
website. Record where it came from, who owns it, licence/permission,
attribution requirements, intended use and whether it is approved for
production.

Do not use Google Images downloads or random hotlinked image URLs. Do
not present AI or stock imagery as real photos of the business, its
staff or products.

## Expected folders

``` text
public/
  assets/
    brand/
    hero/
    cafe/
    menu/
    brunch/
```

## Asset inventory

  --------------------------------------------------------------------------------------
  Asset             Expected location                Status            Notes
  ----------------- -------------------------------- ----------------- -----------------
  Primary logo SVG  `public/assets/brand/logo.svg`   Awaiting client   Verify it opens
                                                     file              and has
                                                                       transparent/no
                                                                       unwanted
                                                                       background

  Logo PNG          `public/assets/brand/logo.png`   Awaiting client   Prefer high
                                                     file              resolution and
                                                                       transparency

  Hero image        `public/assets/hero/`            Awaiting approved Could use
                                                     image             licensed
                                                                       temporary
                                                                       placeholder
                                                                       during mockup

  Café interior     `public/assets/cafe/`            Awaiting          Do not imply a
                                                     client/approved   stock image is
                                                     image             the actual shop

  Barista/team      `public/assets/cafe/`            Awaiting          Confirm
                                                     client/approved   permission from
                                                     image             identifiable
                                                                       people

  Coffee products   `public/assets/menu/`            Awaiting          Match image to
                                                     client/approved   correct item only
                                                     image             when confirmed

  Bakery/brunch     `public/assets/brunch/`          Awaiting          Avoid inventing
                                                     client/approved   menu-item photo
                                                     image             mappings
  --------------------------------------------------------------------------------------

## Asset source log

For each non-client asset, add: - Filename: - Creator/source URL: -
Download date: - Licence name and URL: - Attribution required: -
Commercial use permitted: - Modifications permitted: - Intended
placement: - Production approved (yes/no):

## Temporary asset policy

Temporary assets must be clearly labelled in the source code or
manifest. Remove or replace them before launch if they could mislead
visitors. AI-generated images may be used for design exploration/mockups
only unless the owner explicitly approves their use and they are not
represented as documentary photos.

## Final checks

-   [ ] Correct file format and dimensions.
-   [ ] No broken paths.
-   [ ] Optimised file size.
-   [ ] Appropriate crop on mobile and desktop.
-   [ ] Alt text added or empty alt for decorative images.
-   [ ] Rights/permissions documented.
-   [ ] Owner approval recorded where required.
