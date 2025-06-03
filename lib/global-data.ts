import { Metadata } from "next";
import { TYearAndSubjects } from "./global-types";

export const KU_COLLEGES = [
  'BMC',
  'COMS',
  'DEVDAHA',
  'KMC',
  'LMC',
  'MCOMS',
  'NMC',
  'NGMC',
  'NOBEL',
  'KUSMS'
]

export const yearAndSubjects: TYearAndSubjects = {
  1: [
    { name: 'anatomy', displayName: 'Anatomy', icon: 'Bone' },
    { name: 'physiology', displayName: 'Physiology', icon: 'HeartPulse' },
    { name: 'biochemistry', displayName: 'Biochemistry', icon: 'FlaskConical' },
    { name: 'pharmacology', displayName: 'Pharmacology', icon: 'Pill' },
    { name: 'pathology', displayName: 'Pathology', icon: 'Microscope' },
    { name: 'microbiology', displayName: 'Microbiology', icon: 'Bacteria' },
    { name: 'community_medicine', displayName: 'Community Medicine', icon: 'Users' },
    { name: 'icm', displayName: 'ICM', icon: 'Hospital' } // Assuming ICM is a specific clinical subject
  ],
  2: [
    { name: 'anatomy', displayName: 'Anatomy', icon: 'Bone' },
    { name: 'physiology', displayName: 'Physiology', icon: 'HeartPulse' },
    { name: 'biochemistry', displayName: 'Biochemistry', icon: 'FlaskConical' },
    { name: 'pharmacology', displayName: 'Pharmacology', icon: 'Pill' },
    { name: 'pathology', displayName: 'Pathology', icon: 'Microscope' },
    { name: 'microbiology', displayName: 'Microbiology', icon: 'Bacteria' },
    { name: 'community_medicine', displayName: 'Community Medicine', icon: 'Users' },
    { name: 'icm', displayName: 'ICM', icon: 'Hospital' }
  ],
  3: [
    { name: 'ophthalmology', displayName: 'Ophthalmology', icon: 'Eye' },
    { name: 'ent', displayName: 'ENT', icon: 'Ear' }, // Ear or similar
    { name: 'forensic_medicine', displayName: 'Forensic Medicine', icon: 'Scale' }, // Scale or similar for justice/law
    { name: 'community_medicine', displayName: 'Community Medicine', icon: 'Users' },
  ],
  4: [
    { name: 'medicine', displayName: 'Medicine', icon: 'Stethoscope' },
    { name: 'surgery', displayName: 'Surgery', icon: 'Scissors' },
    { name: 'obg', displayName: 'OBG', icon: 'Baby' }, // Baby or PregnantWoman
    { name: 'paediatrics', displayName: 'Paediatrics', icon: 'Baby' }, // Same as OBG or different
    { name: 'psychiatry', displayName: 'Psychiatry', icon: 'Brain' },
    { name: 'radiology', displayName: 'Radiology', icon: 'Scan' }, // Scan or XRay
    { name: 'anesthesia', displayName: 'Anesthesia', icon: 'Syringe' },
    { name: 'orthopedics', displayName: 'Orthopedics', icon: 'Bone' } // Same as Anatomy
  ]
};




export function constructMetadata({
  title = "KU Viva Sharer",
  description = "Viva sharing platform initiated by Batch 2020 Manipal for ease of every MBBS student across the nation",
  image = "/thumbnail.jpg",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@c0mrad1_"
    },
    icons,
    metadataBase: new URL('https://ku-viva-sharer.vercel.app/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
