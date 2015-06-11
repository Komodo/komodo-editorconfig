Adds [.editorconfig](http://editorconfig.org/) support for Komodo IDE and Edit.

Simply drag the XPI on Komodo to install the addon, then restart Komodo.

Your .editorconfig is applied whenever you open a file. It does not pick up changes
to your .editorconfig while a file is opened, you would have to reopen the file
to apply your .editorconfig changes.

Aside from the native .editorconfig properties you can also use any Komodo preference
names. Mind you that this has not been thoroughly tested yet, so take caution.

If you mess up your file Preferences in some way you can reset them by deleting
the [doc-state.xmlc file from your profile folder](https://community.activestate.com/faq/komodo-profile-structure).
Note that Komodo should not be running when you do this.

This feature will be built-in to Komodo as of version 9.2, so please ensure you
uninstall the addon when updating.