export const formIntialValues = {
  sequence: '',
  username: '',
  status: true,
  introVideo: '',
  reviewCount: '',
  rating: '',
  isVerified: false,
  profile: '',
  seoParagraph: '',
};

export const therapistStatusLabels = [
  { status: true, label: 'Active', type: 'Success' },
  { status: false, label: 'Inactive', type: 'Danger' },
];

export const THERAPIST = {
  HEADING: 'Top Therapist',
  SUB_HEADING: 'Top Therapist List',
  TITLE: 'Top Therapist Details',
  CANCEL_BUTTON: 'Cancel',
  EDIT: { BUTTON: 'Edit Top Therapist' },
  FORM: {
    SEQUENCE_LABEL: 'Sequence',
    SEQUENCE_PLACEHOLDER: 'Enter Sequence',
    USER_FULL_NAME_LABEL: 'User Full Name',
    USER_NAME_LABEL: 'User Name',
    DESIGNATION_LABEL: 'Designation',
    QUALIFICATION_LABEL: 'Qualification',
    RATING_LABEL: 'Rating',
    RATING_PLACEHOLDER: 'Enter Rating',
    SPECIALISATION_LABEL: 'Specialisation',
    STATUS_LABEL: 'Top Therapist Status',
    INTRO_VIDEO_LABEL: 'Intro Video (Youtube ID)',
    INTRO_VIDEO_PLACEHOLDER: 'Enter Intro Video URL',
    REVIEW_COUNT_LABEL: 'Review Count',
    REVIEW_COUNT_PLACEHOLDER: 'Enter Review Count',
    IS_VERIFIED_LABEL: 'Verified',
    PROFILE_PIC_LABEL: 'Profile Picture',
    SEO_PARAGRAPH_LABEL: 'SEO Paragraph',
    SEO_PARAGRAPH_PLACEHOLDER: 'Enter SEO paragraph for this therapist',
  },
};
