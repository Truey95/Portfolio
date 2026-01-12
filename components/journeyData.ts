export interface Job {
    company: string;
    role: string;
    year: string;
    layer: string;
    description: string[];
}

export const journeyData: Job[] = [
    {
        company: "Post Office",
        role: "Package Handler",
        year: "2019",
        layer: "Logistics & Operations Management",
        description: [
            "Mastered organizational systems and package routing.",
            "Developed precision in record-keeping and workflow efficiency.",
            "Reinforced reliability and operational accountability."
        ]
    },
    {
        company: "Wilbercross High School",
        role: "Tutor",
        year: "2019",
        layer: "Communication & Mentorship",
        description: [
            "Guided students through complex concepts with patience and clarity.",
            "Customized teaching approaches, strengthening adaptability and problem-solving."
        ]
    },
    {
        company: "Pharmacy Network",
        role: "Pharmacy Technician Assistant",
        year: "Date",
        layer: "Multilingual Communication & Process Accuracy",
        description: [
            "Prepared and delivered medication safely across a city-wide network.",
            "Learned Spanish to connect with patients, enhancing cultural competence.",
            "Applied meticulous attention to detail in high-stakes environments."
        ]
    },
    {
        company: "Honeywell",
        role: "Motherboard Production Technician",
        year: "Date",
        layer: "Hardware Assembly & Technical Troubleshooting",
        description: [
            "Produced motherboards for safety-critical fire alarm systems.",
            "Managed machinery setup, reconfiguration, and repair, blending manual precision with technical insight.",
            "Developed resilience in solving real-time production challenges."
        ]
    },
    {
        company: "Yale University",
        role: "IT Cluster Control Technician",
        year: "2014",
        layer: "Systems Engineering & Certification",
        description: [
            "Managed, updated, and repaired multiple computer clusters across campus.",
            "Gained Dell Certification, formalizing hardware repair expertise.",
            "Laid the foundation for advanced systems thinking and IT problem-solving."
        ]
    }
];

export const educationData = {
    college: "Pierce College",
    degree: "Degree in [Your Major]",
    year: "[Year]"
};

export const earlyFoundations = [
    { company: "Stop & Shop", role: "Associate", age: "16", takeaway: "Learned customer service, teamwork, and operational basics." },
    { company: "Walgreens", role: "Associate", age: "15", takeaway: "Built work ethic, attention to detail, and early responsibility." }
];
