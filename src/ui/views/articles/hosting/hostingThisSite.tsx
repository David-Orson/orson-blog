// npm
import React from "react";

// mui
import Typography from "@mui/material/Typography";

// assets
const hero = require("../../../../assets/hosting/web-hosting.png");

const HostingThisSite = () => {
    return (
        <div>
            <div className="pt-4">
                <Typography variant="h2">Hosting this site</Typography>
            </div>
            <div>
                <img src={hero} />
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Being self taught, when I was learning to code to land my
                    first job I knew that I would need to host a portfolio in
                    order to compete with graduates with computer science
                    degrees. I looked for the easiest hosting options as I knew
                    that the more that I focused on front end development, the
                    more I could compete. So I used a range of services, I used
                    Hostgator for hosting static sites and a React App, I used
                    netlify for the same (netlify began to be my preference as
                    the service is free and streamlined), and I used firebase
                    exclusively for my database. Using firebase meant that I had
                    quick and easy setup for databases and authentication but
                    then a large part of web development remained a mystery to
                    me. So recently, now that I have a year of experience in the
                    industry, I have decided to become proficient with industry
                    standard hosting practices. So in this article, we will be
                    going through how to host a static site (React) with Nginx
                    on a VPS server (Linode) with a linux operating system (
                    Ubuntu ).
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="h4">Creating a VPS</Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Afer creating an account on Linode (you can choose another
                    hosting service like Digital Ocean), we can create a Linode
                    from our dashboard simply by clicking 'Create Linode'. We
                    have to choose a distribution so for this we will select
                    Ubuntu 20.04 LTS, select a location close to you or your
                    users. For this site at first, I will be selecting a shared
                    CPU Nanode 1GB as this is the cheapest option on Linode
                    currently. Then I will add a label and a password for the
                    root user, I have decided to call the machine that hosts
                    this site 'Tesla' as this blog is intended to share
                    information freely. Now that the form is complete we can
                    simply click 'Create' and Linode will provision our virtual
                    machine.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Once the machine has finished booting, we will be using ssh
                    to connect to the machine from our own terminal. Linode
                    provides a copy-able ssh command along with the IP of our
                    new virtual machine, so we will enter this command into an
                    SSH ready terminal (I am using Ubuntu on WSL2). Once we have
                    added the fingerprint as prompted and entered our root
                    password we just set up, we will have access to our VPS's
                    shell. From here we can operate this like any linux machine,
                    but first I want to do a small amount of housekeeping.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    First thing to do here is to perform system updates, this
                    will make our system more secure and will give us access to
                    the packages we want to use. To update we run the commands
                    'apt update' and then 'apt upgrade', 'apt' and 'apt-get' are
                    package managers for Ubuntu. Next I want to ensure the
                    correct timezone is set for our use, to update your timezone
                    run the command 'timedatectl list-timezones' to see a list
                    of available timezones and then as I am using the zone
                    Europe/London I will run the command "timedatectl
                    set-timezone 'Europe/London'". Now if we run the 'date'
                    command we should see the correct time and date. Next we
                    move onto one of my favourite changes, we will change the
                    hostname by running the command 'hostnamectl set-hostname
                    tesla', you should replace tesla with a name you prefer. We
                    need to reconnect to our VPS for this change to occur, so
                    exit simply by running the command 'exit' and reconnect by
                    ssh. --- update system hosts? --- Lastly we want to add a
                    user so that we are not using the root user all the time,
                    this is especially useful if in the future there are
                    multiple users for this VPS. To add a user, we simply run
                    the command 'adduser orson' where you can replace orson with
                    your username, follow the instructions to set the password
                    and user details but I prefer to leave these user details
                    blank for now. We now want to give this user the top level
                    priveledges of root (think of this as like running
                    applications as administrator on windows), to do this we run
                    the command 'adduser orson sudo' where again you replace
                    orson with your user.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Next I would like to properly configure my SSH config and
                    access by SSH keys so that I do not need to find the IP to
                    connect to tesla. We need to exit the ssh and create a
                    keypair on our machine, to generate a keypair we run the
                    'ssh-keygen -t rsa'. Now we need to use this keypair on our
                    new VPS instance, so we need to use the command 'ssh-copy-id
                    user@hostIP' where you should use the name of the new user
                    you just created and the IP of the host which you can get
                    from the Linode dashboard, we already used this IP to ssh
                    into our instance as the root user. Now the next time we try
                    to log into as this user to our VPS IP we will not have to
                    enter a password to connect. Now lastly to make our
                    connection process seamless, we want to add this VPS
                    connection to a config file so that we can simply run a
                    command like 'ssh tesla' and we will automatically connect
                    as our created user at our VPS. On our host machine we need
                    to navigate to our .ssh directory, we can run the command
                    'cd ~/.ssh/' to do this. Now we need to create a config
                    file. To do this easily we can run a command 'sudo nano
                    config', this will open a text editor called nano. Now we
                    want to add the following lines 'Host tesla' 'Hostname
                    HostIP' and 'User orson', you need to replace HostIP with
                    your VPS IP. Exit and save this (Ctrl + x and then 'y') file
                    and we will now be able to connect to our instance simply by
                    running a command like 'ssh tesla'.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="h4">
                    Registering and configuring a Domain
                </Typography>
            </div>

            <div className="pt-4">
                <Typography variant="body1">
                    Before we begin with serving our website from our new VPS
                    setup, we should decide on our domain name. I want to have a
                    domain like orsondev.com for now, and I have used a provider
                    called namecheap before so I will attempt to get a suitable
                    domain from there and configure it to our VPS. Fortunately
                    as I search through namecheap orsondev.com is available so I
                    will purchase that. I will not worry about paying for SSL as
                    we can set that up for free manually. This domain will only
                    cost me $9.16, so I am quite happy with this price. Next I
                    want to register this domain on my linode VPS, so in the
                    linode dashboard I will navigate to the domain section and
                    add my new domain using my the email address I registered to
                    the domain. I won't use default records here. Now I can use
                    the NS records to tell Namecheap where I will be hosting
                    this domain. I have to first select 'Custom DNS' in the
                    nameservers sectin while managing my domain in my namecheap
                    account, it now asks me to enter the nameservers. These are
                    the DS records we just found on the linode, so we copy them
                    over, for me there are 5 and they look like
                    'ns1.linode.com'. Now I need to add my domains to my Linode,
                    these are A/AAAA records, we leave our first blank for the
                    root 'orsondev.com' and I will add 'www' for
                    'www.orsondev.com'. I need to add my VPS IP again, and I
                    also select a 2 minute TTL. That's it, now our new domain
                    should be registered to our VPS, this takes about 20 minutes
                    for the domain to fully propogate but they do say it can
                    take up to 48 hours, now we just need to set up our web
                    server and host our React build.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1"></Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1"></Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1"></Typography>
            </div>

            <div className="pt-4">
                <Typography variant="h4">Setting up Nginx</Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Nginx is a web serving software often used in the industry
                    for more advanced concetps like reverse-proxy, caching and
                    load balancing. We will just get Nginx set up as a server
                    for now to serve our static React build. First we need to
                    install Nginx so we run the command 'apt install nginx',
                    once that is done we can verify this by using http:// to
                    navigate to the IP of our host in a browser and we should be
                    met with the template Nginx page. If our domain has already
                    propogated, then we should be hosting this template through
                    it.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Now to begin configuring Nginx we should first unlink the
                    default template we have just checked, we do this by running
                    the command 'sudo unlink /etc/nginx/sites-enabled/default'.
                    Now we need to create an nginx configuration file for our
                    new site. We should create a file called
                    /etc/nginx/sites-available/orsondev.com, again replace with
                    your domain, and add the following server block: replace my
                    domains with your own again. Now we need to link our
                    configuration file for the available site, we do this by
                    running the command 'sudo ln -s
                    /etc/nginx/sites-available/orsondev.com
                    /etc/nginx/sites-enabled/'.
                    Now that we have replaced the template with our site, we should check the syntax of our configuration file is correct
                    by running the command 'sudo nginx -t'.
                    Now we should restart our nginx service by running the command 'sudo systemctl restart nginx'.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Now our web service is set up we just need to populate our served directory with our React build
                </Typography>
            </div>

            <div className="pt-4">
                <Typography variant="h4">Building and serving our React project</Typography>
            </div>

            <div className="pt-4">
                <Typography variant="body1">There are a variety of ways to get our project onto our server, but I have had problems in the past
                    with rsync I will just clone the repository from github and build from our server.

                </Typography>
            </div>
        </div>
    );
};

export default HostingThisSite;
