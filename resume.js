function get_resume_info() {
    return {
        name: "Eric Stratmann",
        address: "144 Ayrshire Farm Ln Apt #103, Stanford, CA 94305",
        email: "eric.stratmann@gmail.com",
        website: [
            "http://ericstratmann.com",
            "https://github.com/ericstratmann"
        ],
        education: [
            {
                university: "Stanford University (2008-present)",
                advisor: "John Ousterhout",
            },
            {
                university: "Simon's Rock College of Bard (2005-2008)",
            }
        ],
        experience: [
            {
                title: "Research on Django extensions at Stanford",
                date: "2011-2012",
                description: [
                    "Currently developing a Django module that allows developers to add undo functionality to their Website. It hooks into the Model class to save undo information into a generic undo log class, allowing out of order undo.",
                    "Wrote a Django module allowing developers to easily support server-side push using MVC."
                ]
            }
            {
                title: "Fiz",
                date: "2009-2011",
                description: [
                    "Fiz was a framework that aimed to raise the level of web application programming by using a component based approach.",
                    "Worked on layout, data management, and different components.",
                    "Wrote code in Java and Javascript and wrote unit tests for all code"
                ],
                    
            },
            {
                title: "Samsung R&D Intern",
                date: "Summer 2010",
                description: [
                    "Developed a Javascript framework and API to automatically synchronize HTML5 localStorage to the cloud with node.js"
                ]
            },
            {
                title: "AlamoFS: A Versioning File System with Support for Non-linear History",
                date: "2007-2008",
                description: [
                    "Senior thesis with Honors, Simon’s Rock College",
                    "Wrote a userland file system incorporating several concepts from revision control systems. The file system would automatically keep a version for every modification made to a file and kept track of several branches that users could create."
                ]
            },
            {
                title: "Microsoft: Software Development Engineer Intern",
                date: "Summer 2007",
                description: [
                    "Researched and implemented features for Microsoft Forefront, an enterprise level security product",
                    "Wrote code and tests in C++."
                ]
        ],
        publications: [
            {
                authors: "Stratmann, E., Ousterhout, J., and Sammer, M.",
                title: "Integrating Long Polling With an MVC Framework",
                where: "USENIX Conference on Web Application Development",
                date: "June 2011",
            },
            {
                authors: "Ousterhout, J. and Stratmann, E",
                title: "Managing State for Ajax-Driven Web Components",
                where: "USENIX Conference on Web Application Development",
                date: "June 2010",
            },
            {
                authors: "Ousterhout, J. et. al.",
                title: "The Case for RAMClouds: Scalable High-Performance Storage Entirely in DRAM",
                where: "SIGOPS Operating Systems reveiw, Vol 43, No. 4",
                date: "December 2009",
            }
        ],
        other: [
            {
                where: "AXA Equitable",
                date: "Summer 2006",
                role: "IT Intern",
            },
            {
                where: "Simon's Rock College",
                date: "September 2005 - May 2007",
                role: "Computer Assistant",
            }
        ]
    }
}

function resume_to_text(resume) { 
	out = "Name: {{name}}";
	return Mustache.to_html(out, resume);
}


$(function() {
    $("#text-resume-anchor").click(function() {
        $("#resume-results").html(resume_to_text(get_resume_info()));
    });
});
