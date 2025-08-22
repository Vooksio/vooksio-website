import { sendGAEvent } from "@next/third-parties/google";

export const trackFooterNavigation = (category: string, label: string, href: string) => {
  sendGAEvent("event", "footer_navigation", {
    event_category: category,
    event_label: label,
    link_url: href,
    value: 1,
  });
};

export const trackSocialShare = (platform: string, contentType: string = "website") => {
  sendGAEvent("event", "social_share", {
    method: platform.toLowerCase(),
    content_type: contentType,
    item_id: "vooksio_main_site",
  });
};

export const trackSocialFollow = (platform: string) => {
  sendGAEvent("event", "social_follow", {
    event_category: "social_media",
    event_label: platform.toLowerCase(),
    value: 1,
  });
};

export const trackNewsletterSignup = (location: string = "footer") => {
  sendGAEvent("event", "newsletter_signup", {
    event_category: "engagement",
    event_label: `${location}_newsletter`,
    value: 1,
  });
};

export const trackContactCTA = (location: string = "footer") => {
  sendGAEvent("event", "contact_cta_click", {
    event_category: "lead_generation",
    event_label: `${location}_contact_button`,
    value: 1,
  });
};

export const trackFeatureInteraction = (feature: string, action: string = "view") => {
  sendGAEvent("event", "feature_interaction", {
    event_category: "features",
    event_label: feature,
    action: action,
    value: 1,
  });
};
